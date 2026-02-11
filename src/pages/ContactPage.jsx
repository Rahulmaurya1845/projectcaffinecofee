import { useState } from "react";
import contactImg from "../../assets/contact.svg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Message Sent Successfully 🚀");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <>
      {/* ===================== TOP BLACK SECTION ===================== */}
<section className="w-full bg-black text-white">
  <div className="max-w-7xl mx-auto px-6 py-28 flex items-center justify-center gap-40">
    
    <h1 className="text-5xl md:text-6xl font-extrabold">
      <span className="text-yellow-400">कबीरा</span> SPEAKING
    </h1>

    <img
      src={contactImg}
      alt="Contact Illustration"
      className="w-[45px]"
      draggable="false"
    />

  </div>
</section>


      {/* ===================== CONTACT SECTION ===================== */}
      <section className="w-full bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-2xl font-semibold">
              Say <span className="text-yellow-500">Hello</span>
            </h2>

            <div className="mt-10 space-y-8 text-[15px] leading-7 text-black/80">
              <div>
                <p className="font-bold">INDIA:</p>
                <p className="mt-2">
                  C-567 Saraswati Vihar, Pitampura, New Delhi - 110034
                </p>
              </div>

              <div>
                <p className="font-bold">USA:</p>
                <p className="mt-2">
                  800 Custer Avenue,<br/>
                  Evanston, Greater Chicago Area,<br/>
                  IL, 60202
                </p>
              </div>

              <div>
                <p className="font-bold">UK:</p>
                <p className="mt-2">
                  53, Eversley Crescent,<br/>
                  Ilford, London IG7 4LD
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <p>✉ vipin@coffeeandcreative.in</p>
                <p>✉ nitin@coffeeandcreative.in</p>
              </div>

              <div className="pt-4">
                <p className="font-semibold">Job Related Queries:</p>
                <p className="mt-2">
                  📞 +91 9711087271 / +91 8586869612
                </p>
              </div>

              <div>
                <p className="font-semibold">Marketing Related Queries:</p>
                <p className="mt-2">
                  📞 +91 9999777471 / +91 9999976666
                </p>
              </div>

              <div className="pt-4 font-medium">
                ☕ Let’s brew thoughts
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div>
            <h2 className="text-2xl font-semibold">
              Get In <span className="text-yellow-500">Touch</span>
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">

              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                error={errors.name}
              />

              <Input
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={errors.email}
              />

              <Input
                placeholder="Contact No."
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                error={errors.phone}
              />

              <div>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full border border-yellow-400 px-4 py-3 bg-transparent outline-none"
                >
                  <option value="">Select Subject</option>
                  <option>Branding</option>
                  <option>Website</option>
                  <option>Digital Marketing</option>
                  <option>Photography</option>
                  <option>Films</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-yellow-400 px-4 py-3 outline-none resize-none bg-transparent"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold tracking-widest px-8 py-3 hover:bg-yellow-300 transition-all duration-300"
              >
                SEND
              </button>

            </form>
          </div>
        </div>

        {/* ===================== MAP ===================== */}
        <div className="w-full border-t border-black/10">
          <iframe
            title="Coffee & Creative Map"
            src="https://www.google.com/maps?q=Pitampura%20New%20Delhi&z=13&output=embed"
            className="w-full h-[350px]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}


/* ================= Reusable Input ================= */
function Input({ placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-yellow-400 px-4 py-3 outline-none bg-transparent"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
