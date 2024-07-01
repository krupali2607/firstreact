import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Spinner } from "reactstrap";

function Product(props) {
    const [productData, setproductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState('');

    const getData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setproductData(data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSearch = (event = '') => {
        if (event) {
            setSearch(event.target.value);
            // console.log(search)

        }
        const fData = productData.filter((v) => (
            // console.log(v)
            v.title.includes(search) ||
            v.description.includes(search) ||
            v.price.toString().includes(search) ||
            v.category.includes(search)
        ));

        switch (sortOption) {
            case 'A To Z':
                return fData.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
            case 'Z To A':
                return fData.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
            case 'Low To High':
                return fData.sort((a, b) => a.price - b.price);
            case 'High To Low':
                return fData.sort((a, b) => b.price - a.price);
            default:
                return fData;
        }
        // console.log(fData)
        return fData;
    }

    const dataFinal = handleSearch();

    return (
        <div className="container">
            <div className="d-flex align-items-center p-3 ">
                <h1 className="m-0">Products</h1>
                <div className="d-flex justify-content-end w-100 gap-2">
                    <select name="Sort" id="" onChange={handleSortChange}>Select Option
                        <option value="A To Z">A To Z</option>
                        <option value="Z To A">Z To A</option>
                        <option value="Low To High">Low To High</option>
                        <option value="High To Low">High To Low</option>
                    </select>
                    <input type="search" name="search" placeholder="Search..." onChange={handleSearch} style={{ position: 'relative' }} />
                    {/* <span style={{ position: 'absolute' }}><MdOutlineSearch /></span> */}
                </div>
            </div>
            {loading ? (
                <Spinner>Loading...</Spinner>
            ) :

                <Row>
                    {
                        dataFinal.map((item) => (
                            <>
                                <Col xl={3} lg={4} md={6} sm="6" key={item.id} className='p-3  d-flex justify-content-center'>
                                    <Card style={{ width: "18rem" }} >
                                        <CardBody>
                                            <div className="mx-auto d-flex justify-content-center">
                                                <img src={item.image} alt={item.title} className="mx-auto" style={{ height: '300px', width: '100%' }} />
                                            </div>
                                            <hr />
                                            <CardTitle tag="h5" className="">
                                                <h4>{item.title.length >= 25 ? item.title.substring(0, 15) + '...' : item.title}</h4>

                                            </CardTitle>
                                            <CardSubtitle className="mb-2 text-dark" tag="h6">
                                                <p><b>Price : </b>{item.price}</p>
                                            </CardSubtitle>
                                            <CardText>
                                                <p><b>Description :</b> {item.description.length >= 100 ? item.description.substring(0, 100) + '...' : item.description}</p>

                                                <p><b>category : </b> {item.category}</p>

                                            </CardText>
                                            <div className="d-flex justify-content-center">
                                                <Button color="primary w-75">
                                                    Buy Now
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            }
        </div>
    );
}

export default Product;
