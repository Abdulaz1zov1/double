import {useEffect, useState} from "react";
import {Button, DatePicker, Form, Image, Input, Modal, Radio, Select,} from 'antd';
import {Ariza} from '../../Components/Language'
import Upload from "antd/es/upload/Upload";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import ParticlesBg from 'particles-bg'
import {MainApi} from "../../services/api";
import moment from "moment"
import {listData} from "../../utils/data";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import img from "../../images/passport.jpg"


const Test = ({language, setUserName}) => {
    const history = useNavigate()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false);

    // useEffect(() => {
    //     setUserName(null)
    //     localStorage.removeItem('Token')
    // }, [])

    const [mapDistrict, setMapDistrict] = useState([])
    const [typeFaculty, setTypeFaculty] = useState('')
    const [typeLang, setTypeLang] = useState('')
    const [typeEducation, setTypeEducation] = useState('')
    const [changeFaculty, setChangeFaculty] = useState([])
    const [obj, setObj] = useState({
        degree: "",
        country: "",
        university: "",
        faculty: ""
    })

    useEffect(() => {
        if (typeLang === 'rus' && typeFaculty === 'ertalabgi' && typeEducation === 'bachelor') {
            setChangeFaculty(['Mehnat muhofazasi va yangi materiallar texnologiyasi (tarmoqlar boyicha)', 'Neftь va neftь-gazni qayta ishlash texnologiyasi', 'Neftь va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish', 'Transport logistikasi (avtomobil transporti)', 'Funksional ovqatlanish va bolalar maxsulotlari texnologiyasi', 'Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)', 'Oziq-ovqat sanoati mashina va jihozlari', 'Texnologik mashinalar va jihozlar (sovutish, kriogen texnikasi va moʼtadillash tizimlari mashinalari hamda agregatlari)', 'Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)', 'Materialshunoslik va yangi materiallar texnologiyasi (tarmoqlar boʼyicha)', 'Kimyoviy texnologiya (qurilish materiallar)', 'Neftь gazkimyo sanoati texnologiyasi', 'Mexatronika va robototexnika', 'Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishini jihozlash va avtomatlashtirish', 'Oziq-ovqat texnologiyasi (mahsulot turlari boʼyicha)'])
        } else if (typeLang === 'rus' && typeFaculty === 'kechgi' && typeEducation === 'bachelor') {
            setChangeFaculty(['Oziq-ovqat texnologiyasi (don mahsulotlari)', 'Vinochilik texnologiyasi, bijgʼish mahsulotlari va alkogolsiz ichimliklar texnologiyasi', 'Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)', 'Kimyoviy texnologiya (ishlab chiqarish turlari boʼyicha)', 'Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (tarmoqlar boʼyicha)'])
        } else if (typeLang === 'eng' && typeFaculty === 'ertalabgi' && typeEducation === 'bachelor') {
            setChangeFaculty(['Oziq-ovqat texnologiyasi (mahsulot turlari boʼyicha)'])
        } else if (typeLang === 'rus' && typeFaculty === 'ertalabgi' && typeEducation === 'magister') {
            setChangeFaculty(['Neft va gazni qayta ishlash va kimyoviy texnologiyasi', 'Neftь va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish|Neftь va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish', 'Oziq-ovqat mahsulotlarini ishlab chiqarish va qayta ishlash texnologiyasi (mahsulot turlari boʼyicha)', 'Xizmatlar sohasi (faoliyat turlari va yoʼnalishlari boʼyicha)', 'Oziq-ovqat sanoati mashina va agregatlari', 'Kimyoviy texnologiya jarayonlari va apparatlari (ishlab chiqarish turi boʼyicha)'])
        } else if (typeLang === 'eng' && typeFaculty === 'ertalabgi' && typeEducation === 'magister') {
            setChangeFaculty(['Oziq-ovqat xavfsizligi va sifati|Oziq-ovqat xavfsizligi va sifati', 'Latviya', 'Yogʼochga ishlov berish texnologiyasi va yogʼochshunoslik|Yogʼochga ishlov berish texnologiyasi va yogʼochshunoslik'])
        } else {
            setChangeFaculty([])
        }
    }, [typeLang, typeEducation, typeFaculty])


    const {
        name,
        lastName,
        fatherName,
        phone,
        birth,
        lang,
        district,
        education,
        street,
        faculty,
        form,
        gander,
        house,
        passportS,
        passport,
        passportIssued,
        picture,
        region,
        school,
        facultyName1,
        facultyName2,
        lang1,
        lang2,
        education1,
        education2,
        genderMale,
        genderWoman,
        send,
        location,
        country1,
        country2
    } = Ariza

    const selectRegion = [
        "Toshkent viloyat", "Toshkent shahar", "Surxondaryo", "Namangan", "Andijon", "Samarqand",
        "Sirdaryo", "Navoiy", "Buxoro", "Jizzax", "Qashqadaryo", "Qoraqolpog`iston", "Xorazm", "Farg'ona"
    ]

    function selectDistrict(event) {
        if (event === 'Toshkent viloyat') setMapDistrict(['Bekabod', "Bo'stonliq", "Bo'ka", 'Chinoz', 'Qibray', 'Ohongaron', "Oqqo'rg'on", 'Parkent', 'Quyi chirchiq', "O'rta chirchiq", "Yangiyo'l", 'Yuqori chirchiq', "Zangiota", "Chirchiq"])
        else if (event === 'Toshkent shahar') setMapDistrict(['Mirobod', 'Bektemir', "Mirzo Ulug'bek", 'Sergili', 'Olmozor', 'Uchtepa', 'Shayxontoxur', 'Yashnabod ', 'Chilonzor', 'Yunudabod', 'Yakkasaroy'])
        else if (event === 'Surxondaryo') setMapDistrict(['Angor', 'Boysun', 'Bandixon', 'Denov', 'Jarqo`rg`on', 'Qorlik', 'Qiziriq', 'Qumqo`rg`on', 'Muzrobod', 'Sariosiyo', 'Sariq', 'Sharg`un', 'Sherobod', 'Sho`rchi', 'Termiz', 'Uchqizil', 'Uzun', 'Xalqobod'])
        else if (event === 'Andijon') setMapDistrict(['Oq oltin', 'Oltinko`l', 'Andijon', 'Asaka', 'Ohunboboev', 'Baliqchi', 'Bo`z', 'Buloqboshi', 'Qorasuv', 'Kuyganyor', 'Qo`rg`ontepa', 'Marhamat', 'Poytug``', 'Pahtaobod', 'Shahrihon', 'Xonobod', 'Xodjabod'])
        else if (event === 'Namangan') setMapDistrict(['Chortoq', 'Chust', 'Jomasho`y', 'Kosonsoy', 'Namangan', 'Pop', 'Toshbuloq', 'To`raqo`rg`on', 'Uchqo`rg`on', 'Xaqqulabod'])
        else if (event === 'Samarqand') setMapDistrict(['Oqtosh', 'Bulung`ur', 'Chelak', 'Darband', 'Jumboy', 'Juma', 'Go`zalkent', 'Gulobod', 'Ishtihon', 'Kattaqo`rg`on', 'Qo`shrobod', 'Loish', 'Nurobod', 'Payariq', 'Payshanba', 'Samarqand', 'Tayloq', 'Urgut', 'Ziadin'])
        else if (event === 'Sirdaryo') setMapDistrict(['Baxt', 'Boyovut', 'Sirdaryo', 'Guliston', 'Navro`z', 'Sayxun', 'Sardoba', 'Shirin', 'Sirdaryo', 'Terenozek', 'Xovos', 'Yangiyer'])
        else if (event === 'Navoiy') setMapDistrict(['Beshrobot', 'Konimex', 'Karmana', 'Qiziltepa', 'Navoiy', 'Nurota', 'Tomdibuloq', 'Uchquduq', 'Yangirobot', 'Zarafshon'])
        else if (event === 'Buxoro') setMapDistrict(['Olot', 'Buhoro', 'Galaosiyo', 'Gazli', 'G`ijduvon', 'Kogon', 'Qorako`l', 'Qorovulbozor', 'Romitan', 'Shofirkon', 'Vobkent', 'Jondor'])
        else if (event === 'Jizzax') setMapDistrict(['Aydarko`l', 'Balandchaqir', 'Dashtobod', 'Dostlik', 'Jizzax', 'Gagarin', 'G`allaorol', 'G`oliblar', 'Marjonbuloq', 'Pahtakor', 'Uchtepa', 'O`smat', 'Yangiqishloq', 'Zomin', 'Zafarobod', 'Zarbdor'])
        else if (event === 'Qashqadaryo') setMapDistrict(['Beshkent', 'Chiroqchi', 'Dehqonobod', 'G`uzor', 'Qamashi', 'Karashina', 'Qarshi', 'Koson', 'Kasbi', 'Kitob', 'Muborak', 'Mug`lon', 'Shahrisabz', 'Talimarjon', "Yakkabog'", 'Mirishkor', 'Nishon'])
        else if (event === 'Qoraqolpog`iston') setMapDistrict(['Oqmangit', 'Beruniy', 'Bo`ston', 'Chimboy', 'Qanliko`l', 'Qorao`zak', 'Kegeyli', 'Qo`ng`irot', 'Mang`it', 'Mo`ynoq', 'Nukus', 'Shumanay', 'Taxiatosh', 'Taxtako`pir', 'To`rtko`l', 'Xo`jayli'])
        else if (event === 'Xorazm') setMapDistrict(["Bog'ot tumani", 'Gurlan tumani', "Qo'shko'pir tumani", 'Shovot tumani', 'Urganch shahri', 'Urganch tumani', 'Xazorasp tumani', 'Xiva tumani', '	Xonqa tumani', 'Yangiariq tumani', 'Yangibozor tumani'])
        else if (event === "Farg'ona") setMapDistrict(['Oltiariq tumani', 'Bagʻdod tumani', 'Beshariq tumani', 'Buvayda tumani', 'Dangʻara tumani', 'Fargʻona tumani', 'Furqat tumani', 'Qoʻshtepa tumani', 'Quva tumani', 'Rishton tumani', 'Soʻx tumani', 'Toshloq tumani', 'Uchkoʻprik tumani', '	Oʻzbekiston tumani', 'Yozyovon tumani'])
    }

    const onFinish = (values) => {
        let dataForm = new FormData()
        dataForm.append("birth_date", moment(values.birth_date._d).format("YYYY-MM-DD HH:mm:ss"))
        delete values.birth_date
        Object.keys(values).forEach(key => {
            if ((key !== 'bio_img' || key !== 'birth_date')) {
                dataForm.append(key, values[key])
            }
        })
        dataForm.append("bio_img", values.bio_img.file)

        setLoading(true)
        axios({
            method: "POST",
            url: `${MainApi}/students/add`,
            data: dataForm
        }).then(res => {
            setLoading(false)
            Modal.confirm({
                centered: true,
                title: "Haqiqatdan to'lov qilmoqchimisiz?",
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    history("/fortest")
                },
            })
        }).catch(e => {
            setLoading(false)
            toast.error(e.message)
            console.log(e)
        })
    }

    const handleExample = () => {
        setVisible(true)
    }

    return <>
        <Image
            width={200}
            style={{display: 'none'}}
            src={img}
            preview={{
                visible,
                src: img,
                onVisibleChange: value => {
                    setVisible(value);
                },
            }}
        />
        <ParticlesBg color="#0d3b66" type="cobweb" num={35} bg={true}/>
        <div className={'ariza-box'} style={{marginTop: 100}}>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: '',
                }}
                onFinish={onFinish}
                size={''}
            >
                <div className={'form-ariza'}>
                    <div className={'form-col-1'}>
                        <Form.Item name={'name'} label={name[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item name={'surename'} label={lastName[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item name={'father_name'} label={fatherName[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item name={'phone_number'} label={phone[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item name={'passport_seria_number'} label={passportS[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item name={'passport_jshir'} label={passport[language]}>
                            <Input required/> <Button onClick={() => handleExample()}>Namuna</Button>
                        </Form.Item>

                        <Form.Item name={'passport_location'} label={passportIssued[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item rules={[
                            {
                                required: true,
                                message: birth[language]
                            },
                        ]} name={'birth_date'} label={birth[language]}>
                            <DatePicker/>
                        </Form.Item>

                        <Form.Item name={'gender'} label={gander[language]}>
                            <Radio.Group>
                                <Radio value="male">{genderMale[language]}</Radio>
                                <Radio value="woman">{genderWoman[language]}</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name={'gender'} label={'Nogirionligi bormi?'}>
                            <Radio.Group>
                                <Radio value="yes">{'Ha'}</Radio>
                                <Radio value="no">{"Yo'q"}</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item rules={[
                            {
                                required: true,
                                message: region[language]
                            },
                        ]} name={'region'} label={region[language]}>
                            <Select onChange={(e) => selectDistrict(e)}>
                                {selectRegion.map((item, index) => <Select.Option value={item} key={index}>
                                    {item}
                                </Select.Option>)}
                            </Select>
                        </Form.Item>
                    </div>

                    <div className={'form-col-1'}>
                        <Form.Item rules={[
                            {
                                required: true,
                                message: district[language]
                            },
                        ]} name={'city'} label={district[language]}
                        >
                            <Select>
                                {mapDistrict.map((item, index) => <Select.Option value={item} key={index}>
                                    {item}
                                </Select.Option>)}
                            </Select>

                        </Form.Item>

                        <Form.Item name={'street'} label={street[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item rules={[
                            {
                                required: true,
                                message: house[language]
                            },
                        ]} name={'home_number'} label={house[language]}>
                            <Input required/>
                        </Form.Item>

                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: picture[language]
                                },
                            ]}
                            name="bio_img"
                            label={picture[language]}
                        >
                            <Upload accept=".png,.jpg" beforeUpload={file => {
                                return false
                            }}><Button>Select file</Button></Upload>
                        </Form.Item>

                        <Form.Item name={'finished_study'} label={school[language]}>
                            <Input required/>
                        </Form.Item>
                        <Form.Item rules={[
                            {
                                required: true,
                                message: education[language]
                            },
                        ]} name={'study_level'} label={education[language]}>
                            <Select onChange={(e) => setTypeEducation(e)}>
                                <Select.Option value="bachelor">{education1[language]}</Select.Option>
                                <Select.Option value="master">{education2[language]}</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[
                            {
                                required: true,
                                message: location[language]
                            },
                        ]} name={'country'} label={location[language]}>
                            <Select
                                onChange={event => setObj({
                                    ...obj,
                                    country: event
                                })}
                                value={obj?.country}
                            >
                                {
                                    language === 0 ?
                                        (
                                            typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].map(p => {
                                                return (
                                                    <option value={p.country_uz}>{p.country_uz}</option>
                                                )
                                            })
                                        )
                                        :
                                        (
                                            typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].map(p => {
                                                return (
                                                    <option value={p.country_ru}>{p.country_ru}</option>
                                                )
                                            })
                                        )
                                }
                                {
                                    language === 0 ?
                                        (
                                            typeEducation === "master" &&
                                            listData[0]["master"].map(p => {
                                                return (
                                                    <option value={p.country_uz}>{p.country_uz}</option>
                                                )
                                            })
                                        )
                                        :
                                        (
                                            typeEducation === "master" &&
                                            listData[0]["master"].map(p => {
                                                return (
                                                    <option value={p.country_ru}>{p.country_ru}</option>
                                                )
                                            })
                                        )
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[
                            {
                                required: true,
                                message: "Universitetni tanlang"
                            },
                        ]} name={'university'} label={`Universitetni tanlang`}>
                            <Select
                                onChange={event => setObj({
                                    ...obj,
                                    university: event
                                })}
                                value={obj?.university}
                            >
                                {
                                    language === 0 ?
                                        (typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                                return (
                                                    <option value={p.name_uz}>{p.name_uz}</option>
                                                )
                                            }))
                                        :
                                        (typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                                return (
                                                    <option value={p.name_ru}>{p.name_ru}</option>
                                                )
                                            }))
                                }
                                {
                                    language === 0 ?
                                        (typeEducation === "master" &&
                                            listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                                return (
                                                    <option value={p.name_uz}>{p.name_uz}</option>
                                                )
                                            }))
                                        :
                                        (typeEducation === "master" &&
                                            listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                                return (
                                                    <option value={p.name_ru}>{p.name_ru}</option>
                                                )
                                            }))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[
                            {
                                required: true,
                                message: form[language]
                            },
                        ]} name={'study_type'} label={form[language]}>
                            <Select onChange={(e) => setTypeFaculty(e)}>
                                <Select.Option value="Kunduzgi">{facultyName1[language]}</Select.Option>
                                <Select.Option value="Sirtqi">{facultyName2[language]}</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item rules={[
                            {
                                required: true,
                                message: lang[language]
                            },
                        ]} name={'study_lang'} label={lang[language]}>
                            <Select onChange={(e) => setTypeLang(e)}>
                                <Select.Option value="rus">{lang1[language]}</Select.Option>
                                <Select.Option value="eng">{lang2[language]}</Select.Option>
                            </Select>
                        </Form.Item>


                        <Form.Item rules={[
                            {
                                required: true,
                                message: faculty[language]
                            },
                        ]} name={'facultet'} label={faculty[language]}>
                            <Select
                                onChange={event => setObj({
                                    ...obj,
                                    faculty: event
                                })}
                                value={obj?.faculty}
                            >
                                {
                                    language === 0 ?
                                        (typeEducation === "master" &&
                                            listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                                return (
                                                    <option value={p?.name_uz}>{p?.name_uz}</option>
                                                )
                                            })) :
                                        (typeEducation === "master" &&
                                            listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                                return (
                                                    <option value={p?.name_ru}>{p?.name_ru}</option>
                                                )
                                            }))
                                }
                                {
                                    language === 0 ?
                                        (typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                                return (
                                                    <option value={p?.name_uz}>{p?.name_uz}</option>
                                                )
                                            })) :
                                        (typeEducation === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                                return (
                                                    <option value={p?.name_ru}>{p?.name_ru}</option>
                                                )
                                            }))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{offset: 8, span: 16,}}>
                            <Button className={'form-btn'} type="primary" htmlType="submit" loading={loading}>
                                {send[language]}
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    </>
}

export default Test
