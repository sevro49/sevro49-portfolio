import { Icon } from "@iconify/react";

const socialLinks = [
  {
    "id": 1,
    "name": "GitHub",
    "icon": "mdi:github",
    "url": "https://github.com/sevro49",
    "target": "_blank"
  },
  {
    "id": 2,
    "name": "Resume",
    "icon": "mdi:file-download",
    "url": "/file/emre-guler-resume.pdf",
    "download": "emre-guler-resume.pdf"
  },
  {
    "id": 3,
    "name": "LinkedIn",
    "icon": "ri:linkedin-fill",
    "url": "https://www.linkedin.com/in/sevro49/",
    "target": "_blank"
  }
]

const contactLinks = [
  {
    "id": 1,
    "name": "dr.emreguler@hotmail.com.tr",
    "icon": "material-symbols:mail-outline",
    "url": "mailto:dr.emreguler@hotmail.com.tr"
  },
  {
    "id": 2,
    "name": "+90 0536 561 8687",
    "icon": "ic:baseline-whatsapp",
    "url": "tel:+905365618687"
  }
]

const Footer = () => {
  return (
    <footer className='bg-zinc-900 shadow-up py-12 text-white'>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">

        {/* Useful Links */}
        <div className='w-full flex flex-col gap-5 items-center justify-center'>
          <h2 className='font-semibold text-2xl md:text-3xl'>Useful Links</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {socialLinks?.map((link) => (
              <a key={link?.id} href={link?.url} target={link?.target} download={link?.download} className='flex items-center gap-2 text-yellow-400 group'>
                <Icon icon={link?.icon} className=" text-3xl group-hover:bg-yellow-400 group-hover:text-zinc-800 rounded-md transition-all duration-300"/>
                <span className="text-white">{link?.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className='w-full flex flex-col self-start gap-5 items-center justify-center'>
          <h2 className='font-semibold text-2xl md:text-3xl'>Contact</h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {contactLinks?.map((link) => (
              <a key={link?.id} href={link?.url} className='flex items-center gap-2 text-yellow-400 group'>
                <Icon icon={link?.icon} className=" text-3xl group-hover:bg-yellow-400 group-hover:text-zinc-800 rounded-md transition-all duration-300"/>
                <span className="text-white">{link?.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className='text-center text-yellow-400 pt-12 md:pt-6'>&copy; 2024 Emre Güler</p>
      </div>
    </footer>
  )
}

export default Footer