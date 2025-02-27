export default function ObjectForm() {
  return (
    <form className='form'>
      <label htmlFor='Name'>Name</label>
      <input type='text' placeholder='Name' className='input' />

      <label htmlFor='Description'>Description</label>
      <input type='text' placeholder='Description' className='input' />

      <label htmlFor='Type'>Type</label>
      <select>
        <option value=''>Select a type</option>
        <option value='Desk'>Desk</option>
        <option value='Computer'>Computer</option>
        <option value='Server'>Server</option>
        <option value='Human'>Human</option>
      </select>

      <button type='submit'>Add Object</button>
    </form>
  );
}
