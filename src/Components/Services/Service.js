import React from 'react';
import './Service.css';
import rocket2 from '../../images/rocket.png';
import Header from '../Header/Header';

const Service = () => {

    // const [service, setService] = useState([]);

    // useEffect(() => {
    //     fetch('./data.JSON')
    //     .then(res => res.json())
    //     .then(services => setService(services))
    // }, [])

    return (
        <div className='container'>
            <Header></Header>
            <img className='rocket2' src={rocket2} alt="" />
            <h2 id='service-h2'>SERVICES</h2>
            <h1 id='service-h1'>We provides services to our clients</h1>
                {/* <div className="services row-cols-1 row-cols-md-3 g-4">
                     {
                        service.map(service => <Services key={service.id} service={service}></Services>)
                     }
                </div> */}

        <div className="row row-cols-1 row-cols-md-3 g-5 rw">
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://abouttmc.com/wp-content/uploads/2016/06/ERP-Software-Solution-%E2%80%93-Provides-Your-Team-With-Real-Time-Access-to-Vital-Data.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Software Solution</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://realtime-dxb.com/wp-content/uploads/2021/04/ecommerce-1.png" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">E-commerce Solution</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://affabletechnology.com/wp-content/uploads/2020/08/erp-software-770x450-1.jpeg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">ERP Solution</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://bulksmsbd.com/images/header-1-img.png" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Bulk SMS Service</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1071218_Graphic-Design.jpg" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Graphic Design</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img className='img-card card-img-top' style={{height:"200px"}} src="https://neilpatel.com/wp-content/uploads/2021/07/digital-marketing_featured-image.png" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Digital Marketting</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <button className="more">MORE</button>
                    </div>
                </div>
            </div>
        </div>

        <footer>Copyright Rahul 2022</footer>
            
            
        </div>
    );
};

export default Service;