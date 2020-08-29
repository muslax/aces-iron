import useLicense from '../lib/useLicense'
// import Layout from '../components/Layout'

const License = () => {
  const { license } = useLicense({})

  if (!license) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {/* <h3>License component using useLicense React Hook</h3> */}
      <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre>
    </div>
  )
}

export default License
