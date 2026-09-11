 async function name(url) {
            try{
            let fet = await fetch(url);
            if(!fet.ok){
                throw  new Error(`HTTP error! Status: ${fet.status}`)
            }
        
            let result = await fet.json();
            console.log(result);
        }catch(error){
            console.log(error);
        }
        }
        name('https://api.github.com/users/uwinezaflorence20/repos');
       