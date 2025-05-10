export default function Contact() {
    return (
      <section className="px-4 py-20 bg-white text-center">
        <h1 className="text-3xl font-bold mb-8 text-primary">Contact Us</h1>
        <form
          action="https://formspree.io/f/xgvkvnqj"
          method="POST"
          className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md text-left space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" name="firstName" className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" name="lastName" className="w-full border rounded px-3 py-2" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" name="phone" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address (optional)</label>
            <input type="email" name="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Account Number</label>
            <input type="text" name="account" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Comments</label>
            <textarea name="comments" rows="5" className="w-full border rounded px-3 py-2" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }