import Layout from '../components/Layout'
import withSession from '../lib/session'
import useSWR from 'swr'
import useLicense from '../lib/useLicense'
import PropTypes from 'prop-types'

const SsrLicense = ({ license }) => {
  return (
    <Layout>
      <h1>License SSR</h1>
      <h3>
        getServerSideProps menggunakan hook withSession
      </h3>

      <pre className="pre">{JSON.stringify(license, undefined, 2)}</pre>

      <h3>Lorem ipsum</h3>
      <p>Mus nibh vehicula interdum orci aliquet odio vivamus urna fermentum class, senectus vulputate curae proin efficitur neque elit finibus libero enim, per phasellus molestie magna tempus himenaeos consectetur vitae id maximus, congue felis feugiat quam velit lobortis nec sagittis pulvinar. Tortor nibh suscipit fringilla purus class mollis integer bibendum donec, dolor semper pulvinar aenean lectus a eu tellus pharetra, in nulla scelerisque congue imperdiet dui sapien inceptos penatibus blandit, nascetur eros metus ut phasellus nostra ante eleifend. Tortor iaculis ac imperdiet fames semper scelerisque feugiat urna, tempor diam parturient consequat morbi suspendisse cubilia nec mollis, proin arcu ornare tempus torquent vel turpis lacus aliquam, curabitur adipiscing odio pulvinar auctor habitant dictumst. Nullam leo dignissim senectus arcu platea vitae laoreet felis feugiat, habitant sit volutpat gravida purus id parturient ex sem, imperdiet non ultricies litora erat penatibus himenaeos nostra tristique augue, sapien accumsan facilisi placerat nec bibendum habitasse hendrerit. Et porta augue nisl finibus parturient facilisi in risus, blandit pulvinar pellentesque donec dictum massa pharetra litora non, class urna primis mollis eleifend convallis suspendisse ornare ullamcorper, placerat venenatis est lacinia lorem luctus curabitur. Donec maximus sociosqu lobortis iaculis adipiscing sem purus sapien, condimentum orci tellus eu integer quis pretium mi, ridiculus cras libero fusce dapibus conubia litora molestie gravida, malesuada elementum torquent urna rutrum leo sodales. Lobortis nec fermentum tempor interdum semper lacus aliquam massa erat, pulvinar nostra etiam efficitur maecenas pharetra molestie phasellus class, venenatis parturient justo felis senectus cursus curae litora, hac potenti tincidunt curabitur magnis sed natoque eu. Torquent metus orci sodales ut congue accumsan tristique lacinia diam leo, lectus elit justo semper sem enim nostra maximus interdum, eros parturient dapibus maecenas rhoncus etiam class curae adipiscing, tempus ipsum sed aptent in integer tellus himenaeos est. Dignissim urna nibh cras malesuada tincidunt himenaeos bibendum facilisis fames, justo euismod quam libero vulputate quis vel sodales dictum, efficitur risus elementum sed in pretium lobortis lorem class pellentesque, non aliquam auctor curabitur tempor fusce metus eget.</p>
      <p>Donec vehicula himenaeos viverra fermentum cras sodales taciti dui pellentesque, hac facilisi mi mollis mattis ultricies elit ex sapien, morbi commodo malesuada eleifend sed fusce feugiat nunc urna, ridiculus lectus turpis magna eget augue dictumst in. Varius habitasse platea lobortis dis nullam ac litora diam facilisi, montes dolor condimentum metus quam sapien porta porttitor ad, ipsum maximus vulputate eros curabitur tellus mus et sagittis leo, suscipit placerat convallis malesuada interdum mattis aliquam venenatis. Ante taciti ridiculus tempor sapien elit ultricies consequat pretium cursus, pulvinar aenean nascetur suscipit mattis id malesuada condimentum laoreet, placerat etiam dignissim posuere dapibus eget nullam vitae consectetur ornare, ultrices molestie efficitur dui parturient massa tortor faucibus. Mauris curae sem leo convallis nulla faucibus amet efficitur, vestibulum habitant cursus tellus urna lorem posuere vehicula eget, pretium egestas scelerisque varius phasellus elementum quam donec vulputate, etiam libero semper hendrerit praesent erat lacus. Donec sem nostra suspendisse etiam blandit taciti erat vitae consequat, dis bibendum viverra vehicula senectus imperdiet montes semper magna, nibh dui egestas diam mattis scelerisque pellentesque fermentum adipiscing, ligula metus leo tristique condimentum eleifend hac elementum. Auctor turpis sollicitudin integer inceptos aliquam convallis dapibus nisl praesent, varius per mattis neque erat fringilla aenean dictum phasellus, tincidunt platea nam curae lacus mi lorem placerat ante egestas, venenatis proin eleifend commodo libero vitae odio facilisis. Ligula odio viverra mollis tempor cras lectus tortor tempus natoque, fringilla nec venenatis convallis in ridiculus vestibulum leo turpis, accumsan eros porttitor curabitur libero auctor sed duis, erat sagittis gravida morbi tincidunt imperdiet aliquet pretium. Dis luctus ullamcorper ligula phasellus scelerisque at potenti arcu tortor, vulputate mus adipiscing risus imperdiet vel fermentum tristique dolor, sociosqu erat congue condimentum per donec metus conubia, aliquet turpis neque habitasse praesent fringilla ac porttitor. Luctus ridiculus molestie sagittis magna nibh torquent gravida nam, purus mauris consectetur congue sed per euismod odio auctor, nisi fermentum curabitur lectus turpis iaculis libero magnis enim, hendrerit eleifend curae ullamcorper elit sem aptent. Viverra duis mollis cubilia bibendum sapien metus tristique tempus egestas, arcu ipsum nam nibh fusce orci non consequat sem, netus dignissim parturient volutpat mauris fames conubia nullam himenaeos, elit enim accumsan pharetra sollicitudin mi eget lacus. Fringilla suscipit ut commodo felis facilisis praesent natoque orci, habitant ullamcorper urna velit convallis auctor vehicula rhoncus, augue pellentesque hac conubia metus posuere finibus placerat vulputate, rutrum egestas suspendisse ligula congue vestibulum neque.</p>
      <p>Velit vestibulum commodo phasellus finibus congue nascetur tortor mus convallis, vehicula ultricies litora quisque mollis in curae tristique laoreet, nam consectetur auctor tellus vitae mattis nunc nisl imperdiet, vel magna nec pretium efficitur maecenas porta ac. Luctus etiam eleifend condimentum velit sodales molestie per gravida bibendum, ac turpis class nunc enim in leo magna nulla, non nullam nascetur ullamcorper facilisi rutrum sit dapibus, sapien ridiculus himenaeos erat imperdiet tellus vivamus conubia. Rutrum mauris ad etiam nibh parturient nascetur dolor efficitur morbi, pulvinar aptent urna nam fermentum mi volutpat purus aliquam, gravida sem ullamcorper senectus malesuada eu facilisis ridiculus, porttitor fames quis cras nisl aenean suscipit tempor. Volutpat sapien ipsum cursus litora nibh est a dapibus id, ullamcorper mollis massa sit integer placerat odio cubilia facilisis, dignissim cras feugiat gravida quis ultricies magnis himenaeos ornare tellus, neque porttitor lacus fringilla risus libero laoreet vitae. Sit euismod nostra at molestie lobortis natoque vivamus finibus, rhoncus pharetra sed maximus libero quisque dolor non tempus, posuere eget adipiscing augue dui himenaeos eros in erat, eleifend consequat eu sodales consectetur commodo a. Bibendum sem inceptos varius eleifend feugiat platea lacus leo, donec sociosqu sit rutrum duis id congue nibh, tempor nisl fames amet pulvinar conubia libero consectetur mus, luctus parturient justo nam efficitur porta etiam. Blandit feugiat quis lectus varius nec suscipit at est phasellus, parturient habitasse hendrerit viverra sed laoreet lorem nascetur mauris, scelerisque semper iaculis dignissim elit euismod enim cras et consequat, quam torquent orci nulla vulputate hac velit ullamcorper. Nisl cras ultrices mauris viverra iaculis cursus mattis vivamus, faucibus sem tempus nec tincidunt aliquet congue fringilla risus, rhoncus sollicitudin ullamcorper per mollis molestie senectus bibendum himenaeos, habitasse at rutrum phasellus fames leo neque. Amet odio fames rhoncus tristique facilisis montes consequat per dictum, viverra fermentum velit parturient sociosqu non mi laoreet elementum, sollicitudin nullam tortor porttitor neque suscipit mus ipsum commodo, nunc lobortis sapien curabitur dapibus auctor aliquet congue. Fringilla adipiscing libero vulputate aliquet morbi per himenaeos vel, mattis inceptos tempor malesuada quam ornare nascetur ex, non ligula venenatis egestas maximus porta natoque rhoncus, litora justo taciti fames accumsan penatibus eros.</p>
    </Layout>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })

  const license = await response.json()
  return {
    props: { license },
  }
})

export default SsrLicense

// SsrProfile.propTypes = {
//   user: PropTypes.shape({
//     isLoggedIn: PropTypes.bool,
//     login: PropTypes.string,
//     avatarUrl: PropTypes.string,
//   }),
// }
