import './table.scss'

const Table = ({ date }) => {
  return (
    <div className="table__wrapper">
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Occupation</th>
            <th>ID type</th>
            <th>ID number</th>
            <th>Department</th>
            <th>ID issue date</th>
            <th>ID issue state</th>
            <th>Expiry date</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {date?.map((e, i) => (
            <tr className="table__info" key={e.id}>
              <td>{i + 1}</td>
              <td>{e.fullname}</td>
              <td>{e.birth}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.gender}</td>
              <td>{e.occupation}</td>
              <td>{e.idtypeRef}</td>
              <td>{e.idnumberRef}</td>
              <td>{e.departmentRef}</td>
              <td>{e.idissuedateRef}</td>
              <td>{e.idissuestateRef}</td>
              <td>{e.expirydateRef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
