// const StudentData = require('@models/user');
// const tutorData = require('@models/tutor');

// const { loadBalancer, SYSTEM_TOKEN } = require('@config');
// const axios = require('axios');


// const updateStudentStatus = async (Email1, studentData) => {
//   try {
//     if(studentData.status =="Accepted"){
//       const result = await tutorData.findOneAndUpdate({ email: Email1,isactive:false})
//     }
//     const student = await StudentData.findOne({ email: Email1 });

//     if (!student) {
//       return "Student not found";
//       // throw new Error('Student not found');
//     }

//     let { email, status,flag,subject} = studentData;

         
// // const existingStatus = student.req_status.some(item => {
// //   return item.email == Email1 && item.subject == subject;
// // });

//     let existingStatus = student.req_status.find(
//       (reqStatus) => reqStatus.email == Email1  && reqStatus.subject == Email1);
// // let existingStatus = student.findOne( "reqStatus.email" : Email1  );
  
//     if (existingStatus) {
//       existingStatus.status = status;
//     } else {
//       student.req_status.push({ email, status,flag,subject });
//     }

//     const updatedStudent = await student.save();



//      const student1 = await StudentData.findOne({ email: email });
//     //  let { email, status,flag,} = studentData;
//     let existingStatus12 = student1.req_status.find(
//       (reqStatus) => reqStatus.email == email  && reqStatus.subject == subject);

//     if (existingStatus12) {
//       existingStatus12.status = status;
//     } else {
//       student1.req_status.push({ Email1, status,flag,subject });
//     }

//     const updatedStudent1 = await student1.save();


//     // if (status == "Accepted") {
//     //   // Push the new teacher data into the teacher_userId array
//     //   const newTeacherData = { teacher_userId: tid_userId, subject, classes };
//     //   updatedStudent.teacher_userId.push(newTeacherData);

//     //   // Update flag for specific conditions
//     //   updatedStudent.req_status.forEach((reqStatus) => {
//     //     if (reqStatus.status == "requested" && reqStatus.subject == subject && reqStatus.classes == classes) {
//     //       reqStatus.flag = false;
//     //     }
//     //   });

//     //   await updatedStudent.save();
//     // }

//     // if (status == "requested") {
//     //   const config = {
//     //     method: 'put',
//     //     url: `${loadBalancer}/tms/apis/v1/status/${tid_userId}`,
//     //     headers: {
//     //       app_name: 'teacherApp',
//     //       app_version_code: '101',
//     //       'Content-Type': 'application/json',
//     //       Authorization: `Bearer ${SYSTEM_TOKEN}`,
//     //     },
//     //     data: {
//     //       sid_userId: sid_userId,
//     //       status,
//     //       about,
//     //       subject,
//     //       classes,
//     //       flag,
//     //     },
//     //   };

//     //   const studentUpdateResult = await axios(config);
//     //   console.log('Student status updated:', studentUpdateResult.data);
//     // }

//     return updatedStudent;
//   } catch (error) {
//     console.error('Error updating student status:', error.message);
//     throw new Error('Failed to update student status');
//   }
// };

// module.exports = {
//   updateStudentStatus,
// };


const StudentData = require('@models/user');
const tutorData = require('@models/tutor');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');
const mongoose = require('mongoose');

const updateStudentStatus = async (Email1, studentData) => {
  try {
    if (studentData.status === "Accepted") {
      let isactive1 = false;
      let tutor_id=studentData.tutorid
  const tutorObjectId = mongoose.Types.ObjectId(tutor_id);
        console.log(tutorObjectId)
            //  await tutorData.findOneAndUpdate({ email: Email1, isactive: false });
        await tutorData.findByIdAndUpdate({ _id: tutorObjectId}, {isactive: false} );
    
    }

    const student = await StudentData.findOne({ email: Email1 });

    if (!student) {
      return "Student not found";
    }

    // let { email, status, flag, subject } = studentData;
    let { email, status, flag, subject,tutorid } = studentData;

    // Check and update the status for the first context
    let existingStatus = student.req_status.find(
      (reqStatus) => reqStatus.email === email && reqStatus.subject === subject
    );

    if (existingStatus) {
      existingStatus.status = status;
    } else {
      // student.req_status.push({ email, status, flag, subject });
          student.req_status.push({ email, status, flag, subject,tutorid });

    }

    const updatedStudent = await student.save();

    // Check and update the status for the second context
    const student1 = await StudentData.findOne({ email: email });

    let existingStatus12 = student1.req_status.find(
      (reqStatus) => reqStatus.email === Email1 && reqStatus.subject === subject
    );

    if (existingStatus12) {
      existingStatus12.status = status;
    } else {
      // student1.req_status.push({ email: Email1, status, flag, subject });
             student1.req_status.push({ email: Email1, status, flag, subject,tutorid });

    }

    const updatedStudent1 = await student1.save();


let tutor_id=studentData.tutorid
  const tutorObjectId = mongoose.Types.ObjectId(tutor_id);
        console.log(tutorObjectId)
     const data=await tutorData.findById({ _id: tutorObjectId});
console.log(data)
const existingStatus1111 = data.req_status.find(
  (reqStatus) =>
    reqStatus.email === Email1 &&
    reqStatus.subject === subject &&
    reqStatus.tutorid === tutorid
);
    if (existingStatus1111) {
      existingStatus1111.status = status;
    } else {
      data.req_status.push({ email:Email1, status, flag, subject,tutorid });
    }
//data.req_status.push({ email:Email1, status, flag,subject,tutorid });
 const updatedata = await data.save();

           
    return updatedStudent1;
  } catch (error) {
    console.error('Error updating student status:', error.message);
    throw new Error('Failed to update student status');
  }
};

module.exports = {
  updateStudentStatus,
};
