# [Help](https://help-j278.onrender.com)

## About

Help is a clone of an early version of a review page like [yelp](https://www.yelp.com/). It allows users to view and write reviews for businessess that may interest them. With help, users will be able to see and add their own reviews of businesses around them.

## Technologies

Help was built using Ruby on Rails as the backend, React-Redux as the front end and PostgresSQL as the database management system. The review star, sign up, and log in/out icons are from [Font Awesome](https://fontawesome.com). The Logo is from [Logo.com](https://logo.com/). Google maps API was integrated for each business. 

## Features

Businessess will populate on the splash page where users can select one to view. On the business show page, users will be able to add a review to the business. A review can only be edited and deleted by the author who created it. Each Review also has a rating associated with it that can be edited as well. 

### Review CRUD
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/98872331/218612283-ee80e554-a6f5-421e-80bb-08ef96f85df3.gif)

### Search Feature
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/98872331/218614224-dd262662-5160-4057-9efa-2950bf5cea56.gif)

## Significant Code

### AWS S3 implementation in form with Error handling
```javascript
   const handleSubmit = async (e) => {
        e.preventDefault();
       
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[business_id]', businessId);
        formData.append('review[author_id]', currentUser.id);
        if (imageFiles.length !== 0) {
            imageFiles.forEach(image => {
                formData.append('review[photos][]', image);
            })
        }
        const data = {};
        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }

        dispatch(createReview(formData, businessId))
        .catch(async (res) => {
            let data;
            try{
                setShowModal(true);
                data = await res.clone().json();
            } catch{
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
       
        if (errors){
            setShowModal(false);
        }
        setErrors([]);
    }
```
