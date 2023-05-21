import {useState, useEffect} from 'react';


const Fetch = () => {
    const [employees, setEmployees] = useState([]);
    let url = 'http://172.16.150.238:8000/employees';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(employees => setEmployees(employees))
    }, [])


    const listItems = employees.map(employee =>
        <li
          key={employee.EmployeeId}
          >
          {employee.FirstName}
        </li>
      );
    
      return (
        <ul>{listItems}</ul>
      );
}

export default Fetch;