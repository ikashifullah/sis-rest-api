## Student Information System REST API Endpoints

## Students REST API Endpoints


* ##### GET All Students
  * **URL**: `https://sis-rest-api.herokuapp.com/api/students`
  * **Method**: GET
  * **Response**: ```
[
    {
        id: 1,
        name: 'Faisal Farooq',
        age: 20,
        class: '8th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 1
    },
    {
        id: 2,
        name: 'Yasir Farooq',
        age: 35,
        class: '12th',
        section: 'B',
        address: 'Lahore, Pakistan',
        courseId: 2
    },
    {
        id: 3,
        name: 'Mutahir',
        age: 26,
        class: '11th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 3
    },
]```
* ##### Add a new Student
  * **URL**: `https://sis-rest-api.herokuapp.com/api/students`
  * **Method**: POST
  * **Request**: ```
    {
        name: 'Faisal Farooq',
        age: 20,
        class: '8th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 1
    }```
  * **Response**: ```
    {
        id: 4,
        name: 'Faisal Farooq',
        age: 20,
        class: '8th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 1
    }```
* ##### Edit a Student
  * **URL**: `https://sis-rest-api.herokuapp.com/api/students/1`
  * **Method**: PUT
  * **Request**: ```
    {
        name: 'Faisal New Name',
        age: 21,
        class: '9th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 2
    }```
  * **Response**: ```
    {
        id: 4,
        name: 'Faisal New Name',
        age: 21,
        class: '9th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 2
    }```
* ##### Get a student:
  * **URL**: `https://sis-rest-api.herokuapp.com/api/students/1`
  * **Method**: GET
  * **Response**: ```
    {
        id: 1,
        name: 'Faisal Farooq',
        age: 20,
        class: '8th',
        section: 'A',
        address: 'Lahore, Pakistan',
		course: {
        	id: 1,
        	name: 'Basic JavaScript',
        	duration: '1 month',
        	fee: 5000,
            startDate: '01/03/2020'
		}
    }```
* ##### Delete a student:
  * **URL**: `https://sis-rest-api.herokuapp.com/api/students/1`
  * **Method**: DELETE

## Course REST API Endpoints


* ##### GET All Courses
  * **URL**: `https://sis-rest-api.herokuapp.com/api/courses`
  * **Method**: GET
  * **Response**: ```
[
    {
        id: 1,
        name: 'Basic JavaScript',
        duration: '1 month',
        fee: 5000,
        startDate: '01/03/2020'
    },
    {
        id: 2,
        name: 'Advanced JavaScript',
        duration: '2 month',
        fee: 8000,
        startDate: '01/03/2020'
    },
    {
        id: 3,
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }
]```
* ##### Add a new course
  * **URL**: `https://sis-rest-api.herokuapp.com/api/course`
  * **Method**: POST
  * **Request**: ```
    {
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }```
  * **Response**: ```
    {
		id: 4,
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }```
* ##### Edit a Course
  * **URL**: `https://sis-rest-api.herokuapp.com/api/courses/1`
  * **Method**: PUT
  * **Request**: ```
    {
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }```
  * **Response**: ```
    {
		id: 1,
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }```
* ##### Get a course:
  * **URL**: `https://sis-rest-api.herokuapp.com/api/courses/1`
  * **Method**: GET
  * **Response**: ```
    {
		id: 1,
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }```
* ##### Delete a course:
  * **URL**: `https://sis-rest-api.herokuapp.com/api/courses/1`
  * **Method**: DELETE