import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className='cards'>
        <MyCard imagen="./../public/dalmatian-3210166_640.jpg" nombre="Bartolo" descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" texto="Husky" color="success" />
        <MyCard imagen="./../public/maltese-1123016_640.jpg" nombre="Messi" descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" texto="Bobtail" color="primary" />
        <MyCard imagen="./../public/puppy-1047521_640.jpg" nombre="Gohan" descripcion="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!" texto="Gohan" color="danger" />
        <MyCard imagen="./../public/puppy-1207816_640.jpg" nombre="Princesa" descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos.
¡Ayuda a Princesa a encontrar su final feliz!" texto="Beagle" color="warning" />
      </div>
      <Footer txt="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </>
  )
}

export default App


