var express = require('express');
const studentModel = require('../models/student');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  try {


    const student = new studentModel({
      name: req.body.name,
      age: req.body.age,
      classe: req.body.classe,
      note: req.body.note,
    });
    student.save()

    res.send(student)

  } catch (error) {
    console.log(error)

  }
});
router.put('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const { name, age, classe, note } = req.body
    const student = studentModel.findByIdAndUpdate(req.params.id, {
      name,
      age,
      classe,
      note,
    }).exec()
    res.send("student updated")

  } catch (error) {
    console.log(error)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const student = studentModel.findByIdAndDelete(req.params.id).exec()
    res.send("student deleted")
  } catch (error) {
    console.log(error)
  }
})
router.get('/', async (req, res) => {
  try {
    const student = await studentModel.find().exec()
    res.send(student)
  } catch (error) {
    console.log(error)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id).exec()
    res.send(student)
  } catch (error) {
    console.log(error)
  }
})
router.get("/note/note", async (req, res) => {
  try {
    console.log("****************************")
    const student = await studentModel.find({ note: { $gt: 18 } }).exec()
    res.send(student)
  } catch (error) {
    console.log(error)
  }
})
router.put("/addNote/twin", async (req, res) => {
  try {
    console.log("****************************")

    const student = await studentModel.find({ classe: "4TWIN-5" }).exec()
    student.forEach(element => {
      element.note = element.note + 2
      element.save()
    }
    );
    res.send(student)

  } catch (error) {
    console.log(error)
  }
})



module.exports = router;
