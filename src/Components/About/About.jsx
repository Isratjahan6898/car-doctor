 import person from '../../assets/images/about_us/person.jpg'
 import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="mt-[60px] mx-[100px]">
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
   
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-lg text-[#FF3811] font-bold">About Us</h1>
      <h1 className="py-6 font-bold text-5xl">We are qualified <br></br> & of experience <br></br>in this field</h1>

      <p className='text-[#737373] py-[6]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className='text-[#737373] my-[30px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn text-white bg-[#FF3811] font-bold">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;