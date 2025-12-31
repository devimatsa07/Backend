// const getstudents = (req, res) => {

//     let stddata={name:"mats",age:22 };
//     res.status(200).json({data :stddata});
// };
// const addstudents = (req, res) => {
//     res.status(201).json({ message: "Student added successfully" });
// };
// const addstudent=(req,res)=>{
//     let student=req.body;   
//     console.log(student);
//     res.status(201).json({message:"Single student added successfully"});
// };
// export { getstudents, addstudents,addstudent };



import student from "../models/studentmodels.js";

const getStudentsDetails = async(req, res) => {
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            const mydata = await student.findById("694e2242f09485baf0179e6e")
            res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    const addeddata = await student.create(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};

// const getStudentId = async(req, res) => {
//     try{
//         const id = req.params.userid;
//         console.log("id:", id);
//         const mydata = await student.findById(id);
//         res.status(200).json(mydata);
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// };

const updateStudents = async(req, res) => {
    try {
        const {stdRoll} = req.params;
        const data = req.body;
        const updateddata = await student.findOneAndUpdate({stdRoll:stdRoll}, data, {new:true});
        if(!updateddata){
            return res.status(404).json({message:"user not found"});
        }
        res.status(200).json({student: updateddata, message:"student updated successfully"});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export {getStudentsDetails, addStudents, updateStudents};

