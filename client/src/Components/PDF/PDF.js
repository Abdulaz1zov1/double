import {List} from "antd";
import QRCode from "qrcode";
import {Ariza} from "../Language";
import {forwardRef, useEffect, useState} from "react";
import img from "../../images/passport.jpg"
import {listData} from "../../utils/data";


const PDF = forwardRef(({pdf, type, language, user}, ref) => {
    const [src, setSrc] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [smena, setSmena] = useState(undefined);
    const [bino, setBino] = useState(undefined);
    const [guruh, setGuruh] = useState(undefined);

    const {
        university,
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
    } = Ariza;

    useEffect(() => {
        if (user)
            QRCode.toDataURL(
                "http://192.168.0.102:3000/QR/" + user?.id + "/" + "setapp"
            ).then((data) => {
                setSrc(data);
                //   console.log(data);
            });
    }, [pdf]);

    useEffect(() => {
        if (!!user && language === 0) {
            setSubjects(listData[0][user?.study_level]?.find(i => i.country_uz === user?.country)?.universities.find(y => y.name_uz === user?.university)?.faculties.find(x => x?.name_uz === user?.facultet)?.subjects_uz)
            setSmena(listData[0][user?.study_level]?.find(i => i.country_uz === user?.country)?.universities.find(y => y.name_uz === user?.university)?.smena)
            setBino(listData[0][user?.study_level]?.find(i => i.country_uz === user?.country)?.universities.find(y => y.name_uz === user?.university)?.bino)
            setGuruh(listData[0][user?.study_level]?.find(i => i.country_uz === user?.country)?.universities.find(y => y.name_uz === user?.university)?.faculties.find(x => x?.name_uz === user?.facultet)?.guruh)
        }
        if (!!user && language === 1) {
            setSubjects(listData[0][user?.study_level]?.find(i => i.country_ru === user?.country)?.universities.find(y => y.name_ru === user?.university)?.faculties.find(x => x?.name_ru === user?.facultet)?.subjects_ru)
            setSmena(listData[0][user?.study_level]?.find(i => i.country_ru === user?.country)?.universities.find(y => y.name_ru === user?.university)?.smena)
            setBino(listData[0][user?.study_level]?.find(i => i.country_ru === user?.country)?.universities.find(y => y.name_ru === user?.university)?.bino)
            setGuruh(listData[0][user?.study_level]?.find(i => i.country_ru === user?.country)?.universities.find(y => y.name_ru === user?.university)?.faculties.find(x => x?.name_ru === user?.facultet)?.guruh)
        }
    }, [user])

    return (
        <div
            style={type ? {opacity: 0, marginTop: "20%"} : {}}
            className={type ? "pdf-none" : "pdf-center"}
            ref={ref}
        >
            <div
                id={type ? "PDF" : ""}
                style={type ? {display: "block", width: "65%"} : {}}
            >
                <h3 style={{textAlign: "center"}}>Abituriyentning Qayt varaqasi</h3>
                <h2
                    style={{color: "red", textAlign: "center", fontFamily: "monospace"}}
                >
                </h2>
                <h5 style={{textAlign: "center"}}>Shaxsiy ma'lumotlar</h5>

                <div style={{display: "flex"}}>
                    <div
                        className={"pdf-title"}
                        style={
                            type
                                ? {width: "80%"}
                                : {
                                    width: "80%",
                                    fontSize: 16,
                                }
                        }
                    >
                        <List>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {"F . I . SH"} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.name} {"  "} {user?.surename} {"  "}{" "}
                                    {user?.father_name}
                </span>
                            </div>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {"Passport"} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.passport_seria_number}
                </span>
                            </div>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {passport[language]} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.passport_jshir}
                </span>
                            </div>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {"Passport berilgan joyi"} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.passport_location}
                </span>
                            </div>
                            {/* <div style={type ? {width: '80%'} : {width: '80%', fontSize: 15}}>
                                {'Tug\'lgan sana'} : <span style={{fontWeight: 'bold', width: "60%"}}>{user?.birth_date}</span>
                            </div> */}
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {phone[language]} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.phone_number}
                </span>
                            </div>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {university[language]} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.university}
                </span>
                            </div>
                            <div
                                style={type ? {width: "80%"} : {width: "80%", fontSize: 15}}
                            >
                                {"Yashash manzili"} :{" "}
                                <span style={{fontWeight: "bold", width: "60%"}}>
                  {user?.region +
                  " " +
                  user?.city +
                  " " +
                  user?.street +
                  " " +
                  user?.home_number}
                </span>
                            </div>
                        </List>
                    </div>

                    <div style={{width: "20%"}} className={"logo-pdf"}>
                        <img
                            style={
                                type
                                    ? {width: "130px", height: "130px"}
                                    : {width: "190px", height: "190px"}
                            }
                            src={`${user?.bio_img}`}
                            alt="user?"
                        />
                    </div>

                    {/*<div style={{width: '80px', height: '80px', border: "1px solid"}}>*/}
                    {/*    <img src={src} alt="NO" width={"80px"} height={"80px"}/>*/}
                    {/*    /!*<QRCode value={'http://192.168.31.82:3000/QR/' + pdf._id + "/" + "setapp"} size={80}/>*!/*/}
                    {/*</div>*/}
                </div>

                <hr/>
                <div style={{display: "flex"}}>
                    <div style={{width: "90%"}}>
                        <List>
                            {/*<div style={{display: 'flex'}}>*/}
                            {/*    <List.Item style={type ? {width: '80%'} : {width: '80%', fontSize: 16}}>*/}
                            {/*        {'Passport'} : <span style={{fontWeight: 'bold', width: "60%"}}>{pdf.passport}</span>*/}
                            {/*    </List.Item>*/}
                            {/*    <List.Item style={type ? {width: '80%'} : {width: '80%', fontSize: 16}}>*/}
                            {/*        {'Id'} : <span style={{fontWeight: 'bold', width: "60%"}}>{pdf._id}</span>*/}
                            {/*    </List.Item>*/}
                            {/*</div>*/}

                            <List.Item
                                style={
                                    type
                                        ? {}
                                        : {
                                            fontSize: 16,
                                        }
                                }
                            >
                                {"Test topshiradigan hudud"} :{" "}
                                <span style={{fontWeight: "bold"}}>Toshkent</span>
                            </List.Item>
                            <List.Item style={type ? {} : {fontSize: 16}}>
                                {"Test topshiradigan sana"} :{" "}
                                <span style={{fontWeight: "bold"}}> TKTI Saytida Elon Qilinadi </span>
                            </List.Item>
                            <List.Item
                                style={
                                    type
                                        ? {}
                                        : {
                                            fontSize: 16,
                                        }
                                }
                            >
                                {"Test sinovi topshirish joyiga kelish vaqti"} :{" "}
                                <span style={{fontWeight: "bold"}}>8:00</span>
                            </List.Item>
                        </List>
                    </div>
                    
                </div>

                <hr/>

                <List>
                    <List.Item
                        style={
                            type
                                ? {width: "100%"}
                                : {
                                    width: "100%",
                                    fontSize: 16,
                                }
                        }
                    >
                        {/* {"Test o'tkaziladigan bino nomi"} :{" "} */}
                        {/* <span style={{ fontWeight: "bold" }}>Yoshlar ittifoqi binosi</span> */}
                    </List.Item>
                    <List.Item style={type ? {} : {fontSize: 16}}>
                        {"Bino manzil"} :{" "}
                        <span style={{fontWeight: "bold"}}>
                        Toshkent shahri A. Navoiy ko'chasi 32 uy
            </span>
                    </List.Item>
                    <div style={{display: "flex"}}>
                        <List.Item
                            style={type ? {width: "30%"} : {fontSize: 16, width: "30%"}}
                        >
                            {"Smena"} : <span style={{fontWeight: "bold"}}>{smena}</span>
                        </List.Item>
                        <List.Item
                            style={type ? {width: "30%"} : {fontSize: 16, width: "30%"}}
                        >
                            {"Bino raqami"} : <span style={{fontWeight: "bold"}}>{bino}</span>
                        </List.Item>
                        <List.Item
                            style={type ? {width: "30%"} : {fontSize: 16, width: "30%"}}
                        >
                            {"Guruh raqami"} : <span style={{fontWeight: "bold"}}>{guruh}</span>
                        </List.Item>
                    </div>
                    <div style={{display: "flex"}}>
                        <List.Item
                            style={type ? {width: "50%"} : {fontSize: 16, width: "50%"}}
                        >
                            {"Ta'lim shakli"} :{" "}
                            <span style={{fontWeight: "bold"}}>{user?.study_type}</span>
                        </List.Item>
                        <List.Item
                            style={type ? {width: "50%"} : {fontSize: 16, width: "50%"}}
                        >
                            {"Ta'lim turi"} :{" "}
                            <span style={{fontWeight: "bold"}}>Rus tili</span>
                        </List.Item>
                    </div>
                    <div style={{display: "block", fontSize: 16}}>
                        {/* <h5>
              Tanlangan oliy ta'lim muassasalri va ta'lim yo'nalishlari
              ketma-ketligi:
            </h5>
            <span style={{ fontWeight: "bold" }}>
              Andijon davlat universiteti | Informatika o'qitish metodikasi
            </span>
            <br />
            <span style={{ fontWeight: "bold" }}>
              Andijon davlat universiteti | Informatika o'qitish metodikasi
            </span>
            <br />
            <span style={{ fontWeight: "bold" }}>
              Andijon davlat universiteti | Informatika o'qitish metodikasi
            </span> */}
                        <br/>
                        <br/>
                        {/* <img src={img} alt="passport" className="passport"/> */}
                        <h5>Test topshiradigan fanlar:</h5>
                        {
                            subjects?.map((i, k) => {
                                return (
                                    <div key={k}>
                                        {i}
                                    </div>
                                )
                            })
                        }
                        {/* <span style={{ fontWeight: "bold" }}>Informatika</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Matematika</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Ingliz tili</span> */}
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{textAlign: "center"}}>Abiturientlarga eslatma!</h5>
                        <h5 style={{textAlign: "center"}}>
                        O'zbekiston Respublikasi Prezidenti "O'zbekiston Respublikasi oliy ta'lim 2030 yil
                            yordam rivozhlashtirish concept blue tasdiqlash tẞgrisida "2019 yil 8 oktoberdagi PF-5847-son
                            farmoni hamda “Oliy va urta mahsus talim tizimiga boshkaruvning yangi hodisalarini zhoriy
                            etish chora-tadbirlari tHgʻrisida”gi 2019 yil 11 yuldagi PQ-4391-son karorida qurish
                            vazifalar izhrosini ta'minlash, O'zbekiston Respublikasi va xorizhiy hamkor oliy
                            talim tashkilotlarining o'zaroi bo'yicha qo'shma talim dasturlari asosida talabalarni
                            o'qitishni tashkil etish maksadida Vazirlar maxkamasi qabul qilingan O'zbekiston Respublikasi
                            vazirlar mahkamasining 2021 yil 6 yuldagi 421-sonli “O'zbekiston respublikasi va xorijiy
                            homkor talim tashkilotlarining qo'shma talim dasturlari asosida ta'lim oliy ishlab chiqarish tashkil
                            etish tartibi tạg'ilishda nizomni tasdiklash idagi” karorida xavfsizlik himoya amalgam
                            kengaytirilgan.
                            Xorijiy oliy ta'lim bilan hamkorlikdagi qo'shma talim dasturlariga imtixon
                            jarayonlari test kwrishda 2 bosqichda o'rnatish.
                            1-bosqichda texnikasi ywlishlari bwyich “Fizika-matematika”, texnologiya ywlishlari bwyich
                            “Kimyo-matematika” fanlar bloklari bwyicha maksimal ballning 30% yoki twplagan abituriyentlar
                            2-bosqichga o'tkaziladi.
                            2-bosqichga oʻrnatish entrantlar Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridaghi
                            DTM tomonidan horizhiy tillardan olgan hamkor universiteti o'qitish tilini inobatga
                            Holda tegishli rus va inglis tillaridan o'tkazilady.
                            2-boskich imtihondan maksimal ballning 30% dan ortik ballni twplagan entrantlar DTMning
                            karoriga kwra talabalikka tavsia qiladi
                        </h5>
                        <h5 style={{textAlign: "center"}}>
                            Izoh
                        </h5>
                        <h5 style={{textAlign: "center"}}>
                        Kushma ta'lim dasturlarida taxsil davlat talabalari o'qishlarini oliy ta'lim
                            shaxsiyga kuchirish mumkin emas, foydalanish uchun xavfsizlik qo'shma talim
                            dasturlari bo'yicha o'qishni kuchirish yoki yunalishni o'zgartirish mumkin!!!

                            - Har bir abituriyent telefon raqamiga imtixon va elonlarni SMS tartibida ma'lumotlar
                            zhunatishni biriktirish kerak;
                            - Abituriyent turdosh talim yunalishlarini bezash kerak;
                            bir narsa hamkor universiteti mumkin bulsin);

                        </h5>
                        <br/>
                        <h3
                            style={{
                                color: "red",
                                textAlign: "center",
                                fontFamily: "monospace",
                            }}
                        >
                        </h3>
                        <br/>
                        <br/>
                    </div>
                </List>
            </div>
        </div>
    );
});

export default PDF;
