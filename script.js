let hospital = {
    patientPersonalDetail : {
        firstName : this.firstName,
        lastName : this.lastName,
        phone : this.phone,
        cnic : this.cnic
    },
    setPatientPersonalDetail : function(firstName, lastName, phone, cnic){
        this.patientPersonalDetail.firstName = firstName;
        this.patientPersonalDetail.lastName = lastName;
        this.patientPersonalDetail.phone = phone;
        this.patientPersonalDetail.cnic = cnic;
        this.patientsArray.push(this.patientPersonalDetail);
        },
    patientsArray : [],
    diseases : {
        Fever:{
            name : "Fever",
            symthom : "",
            cause : ""
        },
        Flou:{
            name : "Flou",
            symthom : "",
            cause : ""
        },
        High_Blood_Pressure: {
            name : "High Blood Pressure",
            symthom : "",
            cause : ""
        }
    },
    addDiseas : function(nameVal, symthomVal, causeVal)
    {
        this.diseases[nameVal] = { name : nameVal, symthom : symthomVal, cause : causeVal };
    },
    addPatientPersonalDetail : function()
    {this.patientsArray.push(this.patientPersonalDetail);},
    
    doctorsDetail : {
        Dr_Ahsan:
        {
            name : "Dr_Ahsan",
            speciality : ""
        }
    },
    addDoctor: function(nameVal, specialityValue)
    {
        this.doctorsDetail[nameVal] = { 
            name : nameVal,
            speciality :specialityValue };

            this.apointmentsOPD[nameVal] = {
                Monday : [],
                Wednesday : [],
                Friday : []
            }
    },
    OPD : new Map().set("Monday","07-09 pm").set("Wednesday","06-08 pm").set("Friday","09-11 am"),
    getOPDTiming : function(day)
    {
        return this.OPD.get(day);
    },
    apointmentsOPD : {
        Dr_Ahsan : {
            Monday : ['07:00-07:15','07:15-07:30'],
            Wednesday : [],
            Friday : []
        }
    },
    setAppointment : function(doctorName, appointmentDay)
    {
        if(typeof doctorName == 'object')
            doctorName = doctorName['name'] 
        let newTiming = "";
        let times = this.apointmentsOPD[doctorName]
        [appointmentDay];
        
        let lastVal;
        let hout;
        let hourLast;
        let min;

        if(times.length<1)
        {    
            hour = this.OPD.get(appointmentDay).slice(1,2);
            hourLast = hour;
            min = 0;
        }
        else
        {
            lastVal  = times[times.length-1];
            hour = parseInt(lastVal.slice(-5,-3));
            hourLast = parseInt(lastVal.slice(-5,-3));
            min =  parseInt(lastVal.slice(-2));
        }
        switch(min)
        {
            case 00:
            case 0:
            case 15:
            case 30:
                min += 15;
                break;
            case 45:
                hour ++;
                min = 00;
                break;
        }
        let lastMin = min;  
        min == 00 ?  lastMin = 45: lastMin -= 15;
        

        let appoint = String("0" + hourLast).slice(-2)+":"+
        String("0" + lastMin).slice(-2) +"-"+String("0" + hour).slice(-2)+":"+String("0" + min).slice(-2);
        
        this.apointmentsOPD[doctorName][appointmentDay].push(appoint);
        return appointmentDay +" "+ (appoint + " " +this.OPD.get(appointmentDay).slice(-2)) ;

    },
    getAvailableAppointments : function(doctorName)
    {
        if(typeof doctorName == 'object')
            doctorName = doctorName['name']
        let mon = this.apointmentsOPD[doctorName]["Monday"];
        let wed = this.apointmentsOPD[doctorName]["Wednesday"];
        let fri = this.apointmentsOPD[doctorName]["Friday"];
        let valMon = "";
        let valWed = "";
        let valFri = "";
        if(mon.length<1)
            valMon = this.OPD.get("Monday");
        else if(mon.length>7)
            valMon = "Does not Have Any Time"
        else
            valMon = mon[mon.length-1].slice(-5) + "-"+
            this.OPD.get("Monday").slice(-5);
        if(wed.length<1)
            valWed = this.OPD.get("Wednesday"); 
        else if(wed.length>7)
            valWed = "Does not Have Any Time"  
        else
            valWed = wed[wed.length-1].slice(-5) + "-"+
            this.OPD.get("Wednesday").slice(-5);  
        if(fri.length<1)
            valFri = this.OPD.get("Friday");   
        else if(fri.length>7)
            valFri = "Does not Have Any Time"    
        else
            valFri = fri[fri.length-1].slice(-5) + "-"+
            this.OPD.get("Friday").slice(-5);
        return ["Monday :" + valMon, "Wednesday :"+valWed, "Friday :"+valFri];
    },
    getAppropiateDoctor : function(diseaseVal)
    {
        let val = [];
        for (key in this.doctorsDetail) {
            if(typeof diseaseVal == 'object')
                if(this.doctorsDetail[key]["speciality"]["name"]==diseaseVal["name"])
                    val.push(this.doctorsDetail[key]["name"]);
            else
            if(this.doctorsDetail[key]["speciality"]["name"]==diseaseVal)
                val.push(this.doctorsDetail[key]["name"]);
        }
        return val;
    },
    clearAllAppoinments : function()
    {
        for (key in this.doctorsDetail) {
            this.apointmentsOPD[key] = {
                
                Monday : [],
                Wednesday : [],
                Friday : []
            }
        }
    },

}
