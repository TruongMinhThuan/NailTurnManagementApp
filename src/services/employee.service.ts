import { FirebaseApp } from 'firebase/app';
import { employeeType } from '../types/employee.type';
import firestore, { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import firebaseProvider from '../providers/firebase.provider';

class EmployeeService {
    private db = firebaseProvider.firebaseStorageDB
    protected collectionName: string

    constructor(collectionName = 'employee') {
        this.collectionName = collectionName
    }

    public getEmployee = async () => {

        const docRef = collection(this.db, this.collectionName);
        const querySnapshot = await getDocs(docRef);
        console.log("Document data:", querySnapshot);

        let employeeData: employeeType[] = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            let employeeInfo: employeeType = doc.data();
            employeeData.push(employeeInfo)
        });
        return employeeData
    }

    public addEmployee = async (employee: employeeType) => {

        const docRef = await addDoc(collection(this.db, this.collectionName), employee);
        console.log("Document written with ID: ", docRef.converter);

    }
}


export default new EmployeeService()