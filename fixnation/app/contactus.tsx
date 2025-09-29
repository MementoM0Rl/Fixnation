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
          src="/images/silly-kebby.jpg"
          alt="Silly Kebby"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
      <main style={{ maxWidth: 600, margin: "40px auto", padding: "0 16px" }}>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label>
            Name:
            <input type="text" name="name" required style={{ width: "100%" }} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required style={{ width: "100%" }} />
          </label>
          <label>
            Message:
            <textarea name="message" required rows={4} style={{ width: "100%" }} />
          </label>
          <button type="submit" style={{ width: "fit-content" }}>Send</button>
        </form>
      </main>
      <BottomBar />
    </>
  );
}