// page for viewing User's lands in table format

function MyLands() {
  return <div>
    <div className="col-10 m-auto mt-5 border-top border-end border-start">
 <table class="table  table-hover" style={{backgroundColor: 'white'}}>
  <thead style={{backgroundColor:'#cfcfcf'}}>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Address</th>
      <th scope="col">Date</th>
      <th scope="col">Documents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td><button class="btn btn-primary" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td><button class="btn btn-primary" type="submit">View</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td><button class="btn btn-primary" type="submit">View</button></td>
    </tr>
  </tbody>
</table>
</div>
  </div>;
}
export default MyLands;
