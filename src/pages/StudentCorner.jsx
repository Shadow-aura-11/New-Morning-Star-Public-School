import { Helmet } from 'react-helmet-async'

export default function StudentCorner() {
  return (
    <>
      <Helmet>
        <title>Student Corner - New Morning Star Public School</title>
        <meta name="description" content="Resources for students" />
      </Helmet>
      <div className="page-student-corner">
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Student Corner</h1>
              <p className="section-subtitle">Resources and information for students</p>
            </div>

            <div className="grid grid-2">
              <div className="card card-body">
                <h3 style={{ marginBottom: '1rem' }}>Study Materials</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                  <li>Syllabus and course materials</li>
                  <li>Previous year papers</li>
                  <li>Study guides and notes</li>
                </ul>
              </div>
              <div className="card card-body">
                <h3 style={{ marginBottom: '1rem' }}>Activities</h3>
                <ul style={{ listStyle: 'disc', paddingLeft: '2rem' }}>
                  <li>Sports and games</li>
                  <li>Cultural programs</li>
                  <li>Club activities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
