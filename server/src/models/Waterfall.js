module.exports = (sequelize, DataTypes) => {
    const Waterfall = sequelize.define('Waterfall', {
        name: DataTypes.STRING, //ชื่อน้ำตก
        park: DataTypes.STRING, //อุทยานของน้ำตก
        province: DataTypes.STRING, //จังหวัด
        season : DataTypes.STRING, //ฤดูกาล
        detail: DataTypes.STRING, //รายละเอียด
        address : DataTypes.STRING, //ที่อยู่
        phone: DataTypes.STRING //เบอร์โทร
    })
    return Waterfall
   }