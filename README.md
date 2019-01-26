# Hospital Management Using Objects Literals
I have created the **HOSPITAL MANAGEMENT SYSTEM** using  **ECMA SCRIPT 6** object literals.
## Getting Started
This is valina Javascript that can run on any modern web browser console. I have added necessary properties as well as functions inside that object literal to use it like proper managemet system. If you used this library you will no need to write any external code of functionality.
### Prerequisites
You just need a latest browser for ES 6 compabitility
Reference Table [Here](https://kangax.github.io/compat-table/es6/ "Here")
### Installing
To use it you just simply need notepad or any related IDE that writes javascript code
## Running the Tests
As I have just created a single object named  `hospital` so that you only need this object variable to call the functionality.
### Properties
| Property Name  | Working  |
| ------------ | ------------ |
| `patientPersonalDetail`  | This is the property of type **Object** used 4 types of patient information i.e : First Name, Last Name, Phone & CNIC   |
| `patientsArray`  | This is **Array** type property that stores patients detail  |
| `diseases` | This is also **Object** property that stores diseases information as a property |
| `doctorsDetail` | This stores Doctors detail as **Object**  |
| `OPD` | Its **MAP** type that stores OPD timings default values are Monday : 07-09 pm, Wednesday : 06-08 pm & Friday : 09-11 am (You can chaange it later) |
| `apointmentsOPD` | Its **Array** that save doctors apointments with available OPD timings on available days |
### Functions / Methods
|  Functions | Details (Paameters / Return Values)  |
| ------------ | ------------ |
| `setPatientPersonalDetail()`  | use First Name, Last Name, Phone & CNIC as parameters and Store values in property method  |
| `addDiseas()`  | use Disease Name, Symptoms & Cause as parameter and add disease to system array   |
| `addPatientPersonalDetail()`  |  Add values to patients info array |
| `addDoctor()`  | use Doctor name and Disease Speciality Detail and stores to doctor array  |
| `getOPDTiming()`  | use day as parameter and return you all complete OPD timings of that day  |
| `setAppointment()`  | use doctor name and appointment day to save appointment of that day for you and return you your timing of that day  |
|  `getAvailableAppointments()` | use doctor name to provide you available appointments for all OPD appointment days  |
| `getAppropiateDoctor()`  | use disease as parameter to provide you doctor name based on disease you enter  |
|`clearAllAppoinments()`|Clears all appointmets (Used when new week starts)|

### How To Use
This is how you call Function:
```javascript
hospital.setPatientPersonalDetail('Ali', 'Khan', '030000000000', '42000-0000000-0')
```
This time we use Flou Property inside of disease property as parameter (You can use String also)
```javascript
hospital.getAppropiateDoctor(hospital.diseases.Flou)
hospital.getAppropiateDoctor("Flou")
```





## Versioning
I am constantly updating this file.  Current version is 1.0.8


