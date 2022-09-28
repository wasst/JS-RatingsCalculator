function collect_ratings(){
    
    let ratings = {
        count: 0,
        sum: 0,
        average: 0,
    }

    let rating = 0;
    
    const elements = document.querySelectorAll('.rating')
    //elements are input type with id=starx and value
    elements.forEach(element => {
        rating = parseInt(element.id.replace('star', ''));
        console.log(`rating is ${rating}`)
        ratings.count +=  parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;
    });

    if (ratings.count !== 0) {
        ratings.average = ratings.sum / ratings.count;
    }

    return ratings;
}

 
  document.addEventListener('change', (ev)=> {
    const ratings = collect_ratings();

    document.querySelector('#average').value = ratings.average.toFixed(2);
   
  });