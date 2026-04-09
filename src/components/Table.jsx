import { acceptIstichara, refuseIstichara, getProfileById } from '../services/api';
import { useEffect, useState } from 'react';
{/* if the user is connected we want to display all the istichara that are related to him 
if the user is attorney so he can accept and can refuse the istichara 
in case the user is a client we want to show the status of each istichara (accepted, refused, pending) and the date of each istichara and a button to delete the istichara if the status is pending
*/} {/* if the user is connected we want to display all the istichara that are related to him 
if the user is attorney so he can accept and can refuse the istichara 
in case the user is a client we want to show the status of each istichara (accepted, refused, pending) and the date of each istichara and a button to delete the istichara if the status is pending
*/}

export const Table = ({ isticharaList, isAttorney, setIsticharaList }) => {
    const emptyMessage = isAttorney
        ? "No istichara requests assigned to you"
        : "You have not created any istichara yet";

    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const ids = [...new Set(isticharaList.map(i => i.attorneyId))];

                const responses = await Promise.all(
                    ids.map(id => getProfileById(id))
                );

                const map = {};

                responses.forEach((res, index) => {
                    map[ids[index]] = res.data.data.price;
                });

                setPrices(map);
            } catch (error) {
                console.error(error);
            }
        };

        if (isticharaList.length > 0) {
            fetchPrices();
        }
    }, [isticharaList]);

    const handleAccept = async (id) => {
        await acceptIstichara(id);

        // update UI
        setIsticharaList(prev =>
            prev.map(item =>
                item._id === id ? { ...item, status: 'accepted' } : item
            )
        );
    };

    const handleRefuse = async (id) => {
        await refuseIstichara(id);

        // update UI
        setIsticharaList(prev =>
            prev.map(item =>
                item._id === id ? { ...item, status: 'refused' } : item
            )
        );
    }

    return (
        <>
            {Array.isArray(isticharaList) && isticharaList.length === 0 ? (
                <p>{emptyMessage}</p>
            ) : (
                <div class="table-outer">
                    <table class="cart-table">
                        <thead class="cart-header">
                            <tr>
                                <th>Subject</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th class="price">Price</th>
                                {isAttorney && <th>Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {isticharaList.map((istichara) => (
                                <tr key={istichara._id}>
                                    <td>{istichara.subject}</td>
                                    <td>{istichara.message}</td>
                                    <td>{new Date(istichara.scheduledDate).toLocaleDateString()}</td>
                                    <td class="price">{prices[istichara.attorneyId] ?? '...'}</td>
                                    {isAttorney && (
                                        <td>
                                            {(() => {
                                                const isAccepted = istichara.status == 'accepted';
                                                const isRefused = istichara.status == 'refused';
                                                const isPending = istichara.status == 'pending';

                                                return (
                                                    <>
                                                        {(isPending) && (
                                                            <>
                                                                <button
                                                                    className="theme-btn btn-style-one"
                                                                    style={{
                                                                        backgroundColor: 'green',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    onClick={() => handleAccept(istichara._id)}
                                                                >
                                                                    Accept
                                                                </button>
                                                                <button
                                                                    className="theme-btn btn-style-one"
                                                                    style={{
                                                                        backgroundColor: 'red',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    onClick={() => handleRefuse(istichara._id)}
                                                                >
                                                                    Refuse
                                                                </button>
                                                            </>
                                                        )}


                                                        {isAccepted && (
                                                            <button
                                                                className="theme-btn btn-style-one"
                                                                style={{
                                                                    backgroundColor: '#93eac3',
                                                                    cursor: 'not-allowed',
                                                                }}
                                                                disabled={!isAccepted}
                                                            >
                                                                {isAccepted ? 'Accepted' : 'Accept'}
                                                            </button>
                                                        )}
                                                        {isRefused && (
                                                            <button
                                                                className="theme-btn btn-style-one"
                                                                style={{
                                                                    backgroundColor: '#ff6b6b',
                                                                    cursor: 'not-allowed',
                                                                }}
                                                                disabled={!isRefused}
                                                            >
                                                                {isRefused ? 'Refused' : 'Refuse'}
                                                            </button>
                                                        )}
                                                    </>
                                                );
                                            })()}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}


export default Table;