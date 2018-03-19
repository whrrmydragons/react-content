export default  {
    Query: {
      component:  (root) => {
  
        return {
                _id:"",
                name:"",
                component:"",
                data:"",
                props:[""]
            };
      },
      components:  (root) => {
        return {
                _id:"",
                name:"",
                component:"",
                data:"",
                props:[""]
            };
      },
    },
    Component: {
      _id: () => "3",
      name:() =>"hello",
    },
  }

