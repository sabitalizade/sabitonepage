import React from "react";
import { socials } from "./SideBar";
import { BsFillPhoneFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
const status = {
  success: 1,
  error: 2,
};
const contacts = [
  {
    name: "+99470-671-74-74",
    link: "tel:+994706717474",
    icon: BsFillPhoneFill,
  },
  ...socials,
];
const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: `Full Name: ${data.fullName} \n\nPhone: ${data.phone} \n\nMessage: ${data.message}`,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(status.success);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      })
      .catch((err) => {
        setLoading(status.error);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  };

  return (
    <div className="w-full text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {contacts.map((contact) => (
          <a
            key={contact.link}
            href={contact.link}
            className="gap-3 flex bg-slate-600 hover:bg-slate-700 p-4 rounded-lg h-full w-full"
          >
            {<contact.icon className={`text-2xl hover:text-[#47a81a]`} />}
            {contact.name}
          </a>
        ))}
      </div>
      <div>
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-2xl font-bold">Direct Telegram Message</h1>
        </div>
        {(loading === status.success || loading === status.error) && (
          <div
            className={`border flex justify-between ${
              loading === status.success
                ? "border-green-600 bg-green-400"
                : loading === status.error && "border-red-600 bg-red-400"
            }  p-4 rounded-lg m-4`}
          >
            <span>
              {loading === status.success
                ? "Message sent successfully!"
                : loading === status.error
                ? "Error sending message!"
                : "Please fill the form below to send a message."}
            </span>
            <span
              className="px-2 rounded-full hover:bg-slate-800 cursor-pointer bg-black"
              onClick={() => setLoading(false)}
            >
              x
            </span>
          </div>
        )}
        <form
          className="w-full flex flex-col gap-3 p-4"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div className="w-full">
              <h1 className="p-2 text-lg font-semibold">Full Name</h1>
              <input
                className="h-14 w-full rounded-xl border-none outline-none focus:outline-none p-2 text-black text-lg"
                {...register("fullName", { required: true })}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500">Fullname is required.</p>
              )}
            </div>
            <div className="w-full">
              <h1 className="p-2 text-lg font-semibold">Phone</h1>
              <input
                className="h-14 w-full rounded-xl border-none outline-none focus:outline-none p-2 text-black text-lg"
                {...register(
                  "phone",
                  { required: true },
                  { pattern: /\+[^0-9.]/g }
                )}
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500">Phone name is required.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="p-2 text-lg font-semibold">Message</h1>
            <textarea
              className="rounded-xl border-none outline-none focus:outline-none p-2 text-black text-lg"
              {...register("message", { required: true })}
              placeholder="Message"
              rows="5"
            />
            {errors.message && (
              <p className="text-red-500">Please enter message!</p>
            )}
          </div>
          <button
            className="px-8 py-4 bg-slate-600 disabled:bg-gray-400 select-none rounded-2xl hover:bg-slate-700 transition-all duration-300"
            type="submit"
            disabled={loading === true}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
