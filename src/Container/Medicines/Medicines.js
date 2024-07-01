import React, { useState } from 'react';
import { Button, Card, CardFooter, CardText, CardTitle, Col, Row } from 'reactstrap';

const medicines = [
    {
        "id": 1,
        "name": "Naproxen",
        "price": 85,
        "expiry": 2023,
        "desc": "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
    {
        "id": 2,
        "name": "Jakafi",
        "price": 85,
        "expiry": 2023,
        "desc": "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone."
    },
    {
        "id": 3,
        "name": "Hydrea",
        "price": 85,
        "expiry": 2023,
        "desc": "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck."
    },
    {
        "id": 4,
        "name": "Hiprex",
        "price": 85,
        "expiry": 2023,
        "desc": "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane"
    },
    {
        "id": 5,
        "name": "Meftal",
        "price": 85,
        "expiry": 2023,
        "desc": "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods)."
    },
    {
        "id": 6,
        "name": "Wegovy",
        "price": 85,
        "expiry": 2023,
        "desc": "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity"
    },
    {
        "id": 7,
        "name": "Aripiprazole",
        "price": 85,
        "expiry": 2023,
        "desc": "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type)."
    },
    {
        "id": 8,
        "name": "Orlistat",
        "price": 85,
        "expiry": 2023,
        "desc": "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake."
    }
]
function Medicines(props) {

    const [data, setData] = useState(medicines)
    return (
        <div>
            <Row>
                {
                    data.map((v, i) => (
                        <Col sm="6" key={v.id} className='p-3'>
                            <Card body style={{ height: '28rem', backgroundColor: '#DAD3BE' }}>
                                <CardTitle tag="h5">
                                    <div className='text-center'>
                                        <h2>{v.name}</h2>
                                    </div>
                                    <hr />
                                </CardTitle>
                                <CardText>
                                    <p><b>Id</b> : {v.id}</p>
                                    <p><b>Price</b> : {v.price}</p>
                                    <p><b>expiry</b> : {v.expiry}</p>
                                    <p><b>Desc</b> : {v.desc}</p>
                                </CardText>
                                <CardFooter style={{ height: '22rem', backgroundColor: 'transparent' }} className='d-flex align-items-end justify-content-center'>
                                    <Button style={{ backgroundColor: '#6F4E37' }} outline className='w-75' >
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default Medicines;