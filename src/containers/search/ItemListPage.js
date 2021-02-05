import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ItemList from '../../components/search/ItemList';

const ItemListPage = () => {
    const {si, sido, category} = useSelector(({admin_district, category}) => ({
        si: admin_district.si,
        sido: admin_district.sido,
        category: category.category,
    }));

    const [datalist, setDatalist] = useState([]);
    const [searchedData, setSearchedData] = useState([]);

    const loadData = async () => {
        axios
            .get("./safe_restaurant.json")
            .then(({data}) => {
                setDatalist(data.data);
                if(category !== "전체") {
                    setSearchedData(datalist.filter(e =>
                        (e["RELAX_SI_NM"] === si &&
                        e["RELAX_SIDO_NM"] === sido &&
                        e["RELAX_GUBUN_DETAIL"] === category))
                    );
                }
                else{
                    setSearchedData(datalist.filter(e =>
                        (e["RELAX_SI_NM"] === si &&
                        e["RELAX_SIDO_NM"] === sido &&
                        e["RELAX_GUBUN_DETAIL"] === category))
                    );
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <ItemList data={searchedData}/>
    );
};

export default ItemListPage;