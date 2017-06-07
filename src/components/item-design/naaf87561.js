/* NAAF design */

import React from 'react';
import { API_ADDRESS, STATIC_ASSETS } from '../../constants/Config';

const has_types = 
  [{
    code: "Has_AA_patchy_loss__c",
    title: "Alopecia Areata"
  },{
    code:"Has_AT__c",
    title:"Alopecia Universalis"
  },{
    code:"Has_AU__c",
    title:"Alopecia Areata - Patchy"
  },{
    code:"Has_Alopecia__c",
    title:"Alopecia Totalis"
  }];

const DoctorItemNAAF = (data) => {

  let payment_methods, languages_spoken, age, type_of_practice, office_managers_name, 
  practice_website, practice_email, practice_phone, zip_code, state, city, address_2, 
  address_1, country, practice_name, taking_patients, sex, email , designation, last_name, 
  first_name, has_video, doctor_image, will_meet_with;

  has_types.forEach(t => {
    if(data[t.code]){
      type_of_practice.push(t.title);
    }
  });
  first_name = data.FirstName;
  last_name = data.LastName;
  sex = data.Gender__c;
  age = data.Birthdate;
  has_video = true;
  doctor_image = true;
  address_2 = (data.MailingCity ? data.MailingCity : '') + ', ' + (data.MailingState ? data.MailingState : '');
  designation = data.Description;
  will_meet_with = (data.Mentor_Kids__c ? 'Children' : '') + ' ' + (data.Mentor_Parents__c ? 'Parents' : '');

  return (
    <div className='doctor-item flex'>
        {/*1 column*/}
        <div className='col col-main-1'>
        {doctor_image ? <div className='inline doctor-image'>
          <span className='image-wrapper'><img src={`${API_ADDRESS}/media/images/${doctor_image}`} /></span>
        </div>: ''}
        {has_video ? <a href={has_video} target="_blank" className='video-link'><img src={`${STATIC_ASSETS}media/Play.svg`} /> Click to see video</a> : ''}
       </div>
       {/*colum 2*/}
       <div className='col col-main-2'>

            <div className='row table-details flex'>
                {/*sub col 1*/}
                <div className='col'>
                  <p className='name-line'>{first_name} {last_name}</p>
                  <p className='address-line'>{address_2}</p>
                </div>
                {/*sub col 2*/}
                <div className='col'>
                  <p>{age}, {sex}</p>
                </div>
                {/*sub col 3*/}
                <div className='col'>
                  <p>{will_meet_with}</p>
                </div>
            </div>

            <p className='designation-block'>{designation}</p>
        </div>

     
      {/*colum 3*/}
      <div className='col col-main-3'>
          <p>{type_of_practice}</p>
        </div>
      {/*colum 4*/}
        <div className='col col-main-4'>
          <button className={'link-button'}>Connect with {first_name}</button>
        </div>
    </div>);
}

export default DoctorItemNAAF;
