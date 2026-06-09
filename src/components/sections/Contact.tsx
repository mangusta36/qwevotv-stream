export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Need Assistance?</h2>
        <p className="text-gray-300 mb-10">Our support team is available 24/7 to help you get set up.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="p-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none" />
          <input type="email" placeholder="Email Address" className="p-4 rounded-xl bg-background border border-white/10 focus:border-primary outline-none" />
          <textarea placeholder="How can we help?" className="md:col-span-2 p-4 rounded-xl bg-background border border-white/10 h-32 focus:border-primary outline-none"></textarea>
          <button className="md:col-span-2 py-4 bg-primary hover:bg-secondary rounded-xl font-bold transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
