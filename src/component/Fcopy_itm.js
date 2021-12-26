//Its a copy of Feature_item.
//just for practice.

function Fcopy_itm({ Imge, ttle, sbtitle }) {
  return (
    <div>
      <div>
        <img src={require("../images/" + Imge)} />
      </div>

      <div>
        <h4>{ttle}</h4>
        <p>{sbtitle}</p>
      </div>
    </div>
  );
}
export default Fcopy_itm;
