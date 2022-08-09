import React, {useEffect, useState} from 'react';
import AdminHeader from "../../Components/admin_header/admin_header";
import {Card} from 'antd';
import {MainApi} from "../../services/api";
import studentImg from "../../student.png";
import {listData} from "../../utils/data";

function Statistics({language}) {
    const [allStudents, setAllStudents] = useState([])
    const [allStudents1, setAllStudents1] = useState([])
    const [tolov, setTolov] = useState(0)
    const [obj, setObj] = useState({
        degree: "",
        country: "",
        university: "",
        faculty: ""
    })
    const [chosen, setChosen] = useState(0)

    const handleDefine = () => {
        if (language === 0) {
            setAllStudents(allStudents1?.filter(
                i => (
                    i?.study_level.toString().toLowerCase()?.includes(obj?.degree.toString().toLowerCase()) &&
                    i?.facultet.toString().toLowerCase()?.includes(obj?.faculty.toString().toLowerCase()) &&
                    i?.university.toString().toLowerCase()?.includes(obj?.university.toString().toLowerCase()) &&
                    i?.country.toString().toLowerCase()?.includes(obj?.country.toString().toLowerCase())
                )
            ))
        } else {
            if (language === 1) {
                setAllStudents(allStudents1?.filter(
                    i => (
                        i?.study_level.toString().toLowerCase()?.includes(obj?.degree.toString().toLowerCase()) &&
                        i?.facultet.toString().toLowerCase()?.includes(obj?.faculty.toString().toLowerCase()) &&
                        i?.university.toString().toLowerCase()?.includes(obj?.university.toString().toLowerCase()) &&
                        i?.country.toString().toLowerCase()?.includes(obj?.country.toString().toLowerCase())
                    )
                ))
            }
        }

        setChosen(chosen + 1)
    }


    useEffect(() => {
        fetch(`${MainApi}/students/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllStudents1(data)
            });
        fetch(`${MainApi}/tolov/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTolov(data?.length)
            });
    }, [])

    return (
        <div className='root_page'>
            <AdminHeader/>
            <div className="left_spaced statistics">
                <Card title="Abiturientlar soni" style={{width: 300}}>
                    <p>{allStudents1?.length}</p>
                </Card>
                <Card title="To'lovlar soni" style={{width: 300}}>
                    <p>{tolov}</p>
                </Card>
                <Card title="Tanlovga mos abiturientlar" style={{width: 300}}>
                    <p>{allStudents?.length}</p>
                </Card>
            </div>
            <div className="container2">
                <div className="statistics_result">
                    <img src={studentImg} alt="img" width="80px"/>
                    <h2>{(chosen > 0 &&
                        (!!obj?.degree || !!obj?.country || !!obj?.university || !!obj?.faculty)) ? allStudents?.length : 0} ta
                        talaba ro'yxatdan o'tgan</h2>
                </div>
                <div className="content_wrapper1">
                    <div className="width1001">
                        <label>
                            Darajani tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                degree: event?.target?.value
                            })}
                            value={obj?.degree}
                            className="width100"
                        >
                            <option value=""></option>
                            <option value="bachelor">Bakalavr</option>
                            <option value="master">Magistr</option>
                        </select>
                    </div>
                    <div className="width1001">
                        <label>
                            Davlatni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                country: event?.target?.value
                            })}
                            value={obj?.country}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map(p => {
                                        return (
                                            <option value={p.country_uz}>{p.country_uz}</option>
                                        )
                                    })
                                    :
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map(p => {
                                        return (
                                            <option value={p.country_ru}>{p.country_ru}</option>
                                        )
                                    })
                            }
                            {
                                language === 0 ?
                                    (obj?.degree === "master" &&
                                        listData[0]["master"].map(p => {
                                            return (
                                                <option value={p.country_uz}>{p.country_uz}</option>
                                            )
                                        }))
                                    :
                                    (obj?.degree === "master" &&
                                        listData[0]["master"].map(p => {
                                            return (
                                                <option value={p.country_ru}>{p.country_ru}</option>
                                            )
                                        }))
                            }
                        </select>
                    </div>
                    <div className="width1001">
                        <label>
                            Universitetni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                university: event?.target?.value
                            })}
                            value={obj?.university}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_uz}>{p.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_ru}>{p.name_ru}</option>
                                            )
                                        })
                                    )
                            }
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_uz}>{p.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_ru}>{p.name_ru}</option>
                                            )
                                        })
                                    )
                            }
                        </select>
                    </div>
                    <div className="width1001">
                        <label>
                            Yo'nalishni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                faculty: event?.target?.value
                            })}
                            value={obj?.faculty}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.name_uz}>{p?.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "master" &&
                                    listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.name_ru}>{p?.name_ru}</option>
                                        )
                                    })
                            }
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.name_uz}>{p?.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.name_ru}>{p?.name_ru}</option>
                                        )
                                    })
                            }
                        </select>
                    </div>
                    <br/>
                </div>
                <div>
                    <button onClick={() => handleDefine()}>Aniqlash</button>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
