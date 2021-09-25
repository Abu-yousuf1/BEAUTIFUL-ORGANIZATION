import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Children from '../Children/Children';

const Organization = () => {
    const [child, setChild] = useState([]);
    const [donate, setDonate] = useState([])

    useEffect(() => {
        fetch('./childerns.json')
            .then(res => res.json())
            .then(data => setChild(data))
    }, [])

    const handleAddToCard = children => {
        const newDonate = [...donate, children]
        setDonate(newDonate)
    }
    return (
        <div className="row mt-5">
            <div className=" col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        child.map(ch => <Children
                            key={ch.id}
                            children={ch}
                            handleAddDonate={handleAddToCard}
                        />)
                    }
                </div>
            </div>
            <div className="col-lg-3">
                <Cart donate={donate} />
            </div>
        </div>
    );
};

export default Organization;