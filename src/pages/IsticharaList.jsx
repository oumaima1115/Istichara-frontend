// display in this page a table that contain all istichara that are related to the attorney and he can accept and can refuse the istichara
//in case the user is a client we want to display all the istichara that are related to him and the status of each istichara (accepted, refused, pending) and the date of each istichara
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getMyisticharas } from '../services/api';
import { Table } from '../components/Table';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IsticharaList = () => {
    const [isticharaList, setIsticharaList] = useState([]);
    const { state } = useAuth();

    useEffect(() => {
        // fetch the data using the api variable getMyisticharas that we created in the api.js file and set the data to the isticharaList state
        const fetchIsticharaList = async () => {
            try {
                const response = await getMyisticharas();

                console.log(response);
                setIsticharaList(
                    Array.isArray(response.data?.data)
                        ? response.data.data
                        : []
                );
            } catch (error) {
                console.error('Error fetching istichara list:', error);
            }
        };

        fetchIsticharaList();
    }, []);

    return (
        <div>
            <Navbar />
            <section class="checkout-section cart-section">
                <div class="auto-container">

                    <div class="row clearfix">
                        <div class="col-md-12 col-sm-12 col-xs-12 column default-column">

                            {state.user && state.user.role === "client" ? (
                                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                    {/* this button link to the page where the client can create a new istichara and assign it to an attorney*/}
                                    <a href="/istichara">
                                        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                                            Create New Istichara
                                        </button>
                                    </a>

                                </div>
                            ) : null}
                            <div className="styled-heading ">
                                <h2>My Istichara List</h2>
                            </div>

                            {state.user && state.user.role === "attorney" ? (
                                <Table isticharaList={isticharaList} isAttorney={true} setIsticharaList={setIsticharaList}></Table>
                            ) : (
                                <Table isticharaList={isticharaList} isAttorney={false} setIsticharaList={setIsticharaList}></Table>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

export default IsticharaList;