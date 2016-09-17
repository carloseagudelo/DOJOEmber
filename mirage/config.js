export default function() {
  this.namespace = '/api';
  this.get('actors', function(){
    return{
      data: [{
        type: 'actor',
        id: 'actor001',
        attributes: {
          name: 'Walter White',
          city: 'Nuevo Mexico',
          type: 'Cocinero',
          image: 'https://upload.wikimedia.org/wikipedia/en/6/65/Walter_White2.jpg'
        }
      }, 
      {
        type: 'actor',
        id: 'actor002',
        attributes: {
          name: 'Jessie Pinkman',
          city: 'Nuevo Mexico',
          type: 'Cocinero',
          image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Jesse_Pinkman2.jpg'
        }
      }, 
      {
        type: 'actor',
        id: 'actor003',
        attributes: {
          name: 'Hank Schrader',
          city: 'Nuevo maexico',
          type: 'Agente DEA',
          image: 'http://vignette1.wikia.nocookie.net/breakingbad/images/e/ec/T5B_-_Hank.jpg/revision/latest/scale-to-width-down/270?cb=20130812131352&path-prefix=es'
        }
      }]
    };
  });

}