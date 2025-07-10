import './header.scss'
import logo from '../../assets/title.svg'
import { useRef, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdNoteAdd } from 'react-icons/md'

const Header = ({ setInfo }) => {
  const [fullname, setFullname] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [occupation, setOccupation] = useState('')

  const idtypeRef = useRef(null)
  const idnumberRef = useRef(null)
  const departmentRef = useRef(null)
  const idissuedateRef = useRef(null)
  const idissuestateRef = useRef(null)
  const expirydateRef = useRef(null)

  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const userdata = {
      id: new Date().getTime(),
      fullname,
      birth: Number(birth),
      email,
      phone: Number(phone),
      gender,
      occupation,
      idtypeRef: idtypeRef.current.value,
      idnumberRef: Number(idnumberRef.current.value),
      departmentRef: departmentRef.current.value,
      idissuedateRef: idissuedateRef.current.value,
      idissuestateRef: idissuestateRef.current.value,
      expirydateRef: expirydateRef.current.value,
    }
    setInfo((p) => [...p, userdata])
    setShow(false)
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="" />
          </div>
          <button onClick={() => setShow(true)} className="navbar__btn">
            <MdNoteAdd />
            <span>Add</span>
          </button>
        </nav>
      </header>
      {show ? (
        <>
          <div onClick={() => setShow(false)} className="bgWrapper"></div>
          <div className="wrapper">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
              <p>Personal details</p>
              <div className="form">
                <div className="form__item">
                  <label className="form__label" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    className="form__input"
                    placeholder="Enter your name"
                    type="text"
                    required
                    id="fullname"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="birth">
                    Date of Birth
                  </label>
                  <input
                    onChange={(e) => setBirth(e.target.value)}
                    value={birth}
                    className="form__input"
                    placeholder="Enter birth day"
                    type="number"
                    required
                    id="birth"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form__input"
                    placeholder="Enter your email"
                    type="email"
                    required
                    id="email"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="phone">
                    Mobile Number
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="form__input"
                    placeholder="Enter mobile number"
                    type="number"
                    required
                    id="phone"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="gender">
                    Gender
                  </label>
                  <input
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    className="form__input"
                    placeholder="Enter your gender"
                    type="text"
                    required
                    id="gender"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="occupation">
                    Occupation
                  </label>
                  <input
                    onChange={(e) => setOccupation(e.target.value)}
                    value={occupation}
                    className="form__input"
                    placeholder="Enter occupation"
                    type="text"
                    required
                    id="occupation"
                  />
                </div>
              </div>
              <p>Identity Details</p>
              <div className="form">
                <div className="form__item">
                  <label className="form__label" htmlFor="idtype">
                    ID Type
                  </label>
                  <input
                    ref={idtypeRef}
                    className="form__input"
                    placeholder="Enter ID type"
                    type="text"
                    required
                    id="idtype"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="idnumber">
                    ID Number
                  </label>
                  <input
                    ref={idnumberRef}
                    className="form__input"
                    placeholder="Enter ID number"
                    type="number"
                    required
                    id="idnumber"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="department">
                    Issue Authority
                  </label>
                  <input
                    ref={departmentRef}
                    className="form__input"
                    placeholder="Enter issue department"
                    type="text"
                    required
                    id="department"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="issuedate">
                    Issue Date
                  </label>
                  <input
                    ref={idissuedateRef}
                    className="form__input"
                    placeholder="Enter ID issue date"
                    type="text"
                    required
                    id="issuedate"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="idissuestate">
                    Issue State
                  </label>
                  <input
                    ref={idissuestateRef}
                    className="form__input"
                    placeholder="Enter ID issue state"
                    type="text"
                    required
                    id="idissuestate"
                  />
                </div>
                <div className="form__item">
                  <label className="form__label" htmlFor="expirydate">
                    Expiry Date
                  </label>
                  <input
                    ref={expirydateRef}
                    className="form__input"
                    placeholder="Enter ID expiry date"
                    type="text"
                    required
                    id="expirydate"
                  />
                </div>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <button className="form__btn" type="submit">
                  <span>Next</span>
                  <FaLongArrowAltRight />
                </button>
                <button
                  onClick={() => setShow(false)}
                  type="button"
                  className="form__close"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Header
