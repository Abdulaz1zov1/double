const Ariza = require("../models/ariza")


exports.register = async (req, res) => {
    try {
        const result = new Ariza({
            ...req.body,
            bio_img: `http://185.217.131.79:4000/${req.file.path.slice(7)}`
        })
        result.save()
        res.status(200).json({ data: result })
    } catch (e) {
        console.log('err', e)
    }
}

exports.login = async (req, res) => {
    const { name, phone_number } = req.body;
    if (!name) {
        res.status(404).json({success: false})
    }
    else if (!phone_number) {
        res.status(404).json({success: false})
    }
    const user = await Ariza.findOne({ name: name }).select("phone_number");
    if (!user) {
        res.status(404).json({success: false})
    }else{
        res.status(200).json({success: true, data: user})
    }
};

exports.getById = async (req, res) => {
    try {
        const result = await Ariza.findById({ _id: req.params.id })
        res.status(200).json(result)
    } catch (e) {
        console.log(e, 'err')
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await Ariza.find({}).sort({ date: -1 })
        res.status(200).json(result)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.getUpdate = async (req, res) => {
    try {
        const result = await Ariza.findByIdAndUpdate(req.params.id, {$set: {status: true} } )
        res.json({data: result})
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.getDelete = async (req, res) => {
    try {
        const result = await Ariza.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({data: []})
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.getfilter = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments({
            facultet: {
                $in: ["Oziq-ovqat texnologiyasi (non, makaron va qandolatchilik mahsulotlari)"]
            }
        })
        res.json({
            fakultet: "Oziq-ovqat texnologiyasi (non, makaron va qandolatchilik mahsulotlari)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}

exports.get2 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)"]
            }
        })
        res.json({
            fakultet: "Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}

exports.get3 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Oziq-ovqat texnologiyasi (don mahsulotlari)"]
            }
        })
        res.json({
            fakultet: "Oziq-ovqat texnologiyasi (don mahsulotlari)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}


exports.get4 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik mashinalar va jihozlar(sovutish, kriogen texnikasi va moʼʼtadillash tizimlari mashinalari hamda agregatlari)"]
            }
        })
        res.json({
            fakultet: "Texnologik mashinalar va jihozlar(sovutish, kriogen texnikasi va moʼʼtadillash tizimlari mashinalari hamda agregatlari)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}


exports.get5 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)"]
            }
        })
        res.json({
            fakultet: "Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}

exports.get6 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Kimyoviy texnologiya (qurilish materiallar)"]
            }
        })
        res.json({fakultet: "Kimyoviy texnologiya (qurilish materiallar)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get7 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)"]
            }
        })
        res.json({fakultet: "Texnologik mashinalar va jihozlar (tarmoqlar boʼyicha)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get8 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Kimyoviy texnologiya (ishlab chiqarish turlari boʼyicha)"]
            }
        })
        res.json({fakultet: "Kimyoviy texnologiya (ishlab chiqarish turlari boʼyicha)", total: result})
    } catch (err) {
        next(err)
    }
}
exports.get9 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (tarmoqlar boʼyicha)"]
            }
        })
        res.json({
            fakultet: "Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (tarmoqlar boʼyicha)",
            total: result
        })
    } catch (err) {
        next(err)
    }
}

exports.get10 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishini jihozlash va avtomatlashtirish"]
            }
        })
        res.json({fakultet: "Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishini jihozlash va avtomatlashtirish", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get11 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Neft va neftь-gazni qayta ishlash texnologiyasi"]
            }
        })
        res.json({fakultet: "Neft va neftь-gazni qayta ishlash texnologiyasi", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get12 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Neft va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish"]
            }
        })
        res.json({fakultet: "Neft va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get13 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Menejment (innovatsion)"]
            }
        })
        res.json({fakultet: "Menejment (innovatsion)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get14 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Oziq-ovqat texnologiyasi (mahsulot turlari boʼyicha)"]
            }
        })
        res.json({fakultet: "Oziq-ovqat texnologiyasi (mahsulot turlari boʼyicha)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get15 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Materialshunoslik va yangi material texnologiyasi (tarmoqlar bo'yicha)"]
            }
        })
        res.json({fakultet: "Materialshunoslik va yangi material texnologiyasi (tarmoqlar bo'yicha)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get16 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Jarayonni boshqarish uchun axborot-kommunikatsiya tizimlari"]
            }
        })
        res.json({fakultet: "Jarayonni boshqarish uchun axborot-kommunikatsiya tizimlari", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get17 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Kimyoviy texnologiya jarayonlari va apparatlari (ishlab chiqarish turi boʼyicha)"]
            }
        })
        res.json({fakultet: "Kimyoviy texnologiya jarayonlari va apparatlari (ishlab chiqarish turi boʼyicha)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get18 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Yogʼochga ishlov berish texnologiyasi va yogʼochshunoslik"]
            }
        })
        res.json({fakultet: "Yogʼochga ishlov berish texnologiyasi va yogʼochshunoslik", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get19 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Kimyoviy texnologiya(silikat va qiyin eriydigan nometall materiallar)"]
            }
        })
        res.json({fakultet: "Kimyoviy texnologiya(silikat va qiyin eriydigan nometall materiallar)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get20 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Oziq-ovqat mahsulotlarini ishlab chiqarish va qayta ishlash texnologiyasi (mahsulot turlari boʼyicha)"]
            }
        })
        res.json({fakultet: "Oziq-ovqat mahsulotlarini ishlab chiqarish va qayta ishlash texnologiyasi (mahsulot turlari boʼyicha)", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get21 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Oziq-ovqat sanoati mashinalari va agregatlari"]
            }
        })
        res.json({fakultet: "Oziq-ovqat sanoati mashinalari va agregatlari", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get22 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Neft va gazni qayta ishlash va kimyoviy texnologiyasi"]
            }
        })
        res.json({fakultet: "Neft va gazni qayta ishlash va kimyoviy texnologiyasi", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get23 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Neft va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish"]
            }
        })
        res.json({fakultet: "Neft va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get24 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Texnologik jarayonlar axborot-kommunikatsiya tizimlarini boshqarish"]
            }
        })
        res.json({fakultet: "Texnologik jarayonlar axborot-kommunikatsiya tizimlarini boshqarish", total: result})
    } catch (err) {
        next(err)
    }
}

exports.get25 = async(req, res, next)=>{
    try {
        const result = await Ariza.countDocuments   ({
            facultet: {
                $in: ["Oziq-ovqat xavfsizligi va sifati"]
            }
        })
        res.json({fakultet: "Oziq-ovqat xavfsizligi va sifati", total: result})
    } catch (err) {
        next(err)
    }
}
