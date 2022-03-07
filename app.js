const app = new Vue ({

    el: "#app",
    data: {

        emailArray: [],

    },
    created() {

        for(let i=0; i<10; i++) {

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {

                if (res.status == 200) {

                    this.emailArray.push(res.data.response)
                    
                }  
    
            })

        }

    },

})