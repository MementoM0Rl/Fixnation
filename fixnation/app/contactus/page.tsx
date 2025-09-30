import Image from "next/image";
import TopBar from '@/app/components/header';
import BottomBar from '@/app/components/footer';

export default function ContactUs() {
  return (
    <>
      <TopBar />
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 800,
          aspectRatio: "475 / 375",
          margin: "40px auto 0 auto",
        }}
      >
      <Image
         src="/images/fixnation-fursona.jpg"
         alt="Fixnation Fursona"
         width={800}
         height={900}
         className="left-image"
      />


      </div>
     <div className="form-container">
  <main className="form-box">
    <h1>Contact Us</h1>
    <p>
      We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
    </p>
    <form className="contact-form">
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required rows={4} />
      </label>
      <button type="submit">Send</button>
    </form>
  </main>
</div>
<BottomBar />

    </>
  );
}