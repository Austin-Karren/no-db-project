let defaultTypes = [ 
   {
      id: 0,
      type: 'guardian',
      name: 'Jedi Guardian',
      color: 'blue',
      lightsaberImg: 'https://img.pngio.com/blue-lightsaber-transparent-background-png-png-arts-blue-lightsaber-transparent-960_240.png',
      characterImg: 'https://i4.lisimg.com/14276764/411full.jpg'
   },
   {
      id: 1,
      type: 'sentinel',
      name: 'Jedi Sentinel',
      color: 'yellow',
      lightsaberImg: 'https://vignette.wikia.nocookie.net/lightsaber-info/images/7/7b/Image-1436050739.jpg/revision/latest/scale-to-width-down/340?cb=20150704225859',
      characterImg: 'https://i.pinimg.com/originals/bf/25/7d/bf257d9f77f73da514260ff4c7dda3bb.jpg'
   },
   {
      id: 2,
      type: 'consular',
      name: 'Jedi Consular',
      color: 'green',
      lightsaberImg: 'https://preview.free3d.com/img-dev/2016/01/1734941805058721127/jpubpw6u-900.jpg',
      characterImg: 'https://www.malextra.com/image-library/partners/bang/land/1000/s/star-wars-jedi-fallen-order-fd593850e9a1158dbdf7087095c27c85.jpg'
   },
   {
      id: 3,
      type: 'sith',
      name: 'Dark Jedi',
      color: 'red',
      lightsaberImg: 'https://i.pinimg.com/originals/39/3f/11/393f115b16e07cd7f36317e5bdd685f9.jpg',
      characterImg: 'https://qph.fs.quoracdn.net/main-qimg-6111f6d802acc713dbe5f81555ce66c2'
   }
];
let jedi = [];
let id = 0;
let obj = {};

module.exports = {
   read: (req, res) => {
      res.status(200).send(jedi);
   },
   create: (req, res) => {
      console.log(req.body)
      const {type, name, color} = req.body;
      switch (type) {
         case 'guardian':
            obj = defaultTypes[0];
            obj = {
               id,
               type,
               name: name || obj.name,
               color: color || obj.color,
               lightsaberImg: obj.lightsaberImg,
               characterImg: obj.characterImg
            }
            jedi.push(obj);
            id++;
            break;
         case 'sentinel':
            obj = defaultTypes[1];
            obj = {
               id,
               type,
               name: name || obj.name,
               color: color || obj.color,
               lightsaberImg: obj.lightsaberImg,
               characterImg: obj.characterImg
            }
            jedi.push(obj);
            id++;
            break;
         case 'consular':
            obj = defaultTypes[2];
            obj = {
               id,
               type,
               name: name || obj.name,
               color: color || obj.color,
               lightsaberImg: obj.lightsaberImg,
               characterImg: obj.characterImg
            }
            jedi.push(obj);
            id++;
            break;
         case 'sith':
            obj = defaultTypes[3];
            obj = {
               id,
               type,
               name: name || obj.name,
               color: color || obj.color,
               lightsaberImg: obj.lightsaberImg,
               characterImg: obj.characterImg
            }
            jedi.push(obj);
            id++;
            break;
         default:
            obj = defaultTypes[0];
            obj = {
               id,
               type: type || obj.type,
               name: name || obj.name,
               color: color || obj.color,
               lightsaberImg: obj.lightsaberImg,
               characterImg: obj.characterImg
            }
            jedi.push(obj);
            id++;
      }
      res.status(200).send(jedi);
   },
   update: (req, res) => {
      const {name, color, lightsaberImg, characterImg} = req.body;
      const {id} = req.params;
      obj = jedi.find(jedi => +id === jedi.id);
      obj = {
         id: obj.id,
         type: obj.type,
         name: name || obj.name,
         color: color || obj.color,
         lightsaberImg: lightsaberImg || obj.lightsaberImg,
         characterImg: characterImg || obj.characterImg
      }
      let index = jedi.findIndex(element => obj.id === element.id);
      jedi.splice(index, 1, obj);
      res.status(200).send(jedi);
   },
   delete: (req, res) => {
      const {id} = req.params;
      const index = jedi.findIndex(jedi => jedi.id === +id);
      jedi.splice(index, 1);
      res.status(200).send(jedi);
   }
}

