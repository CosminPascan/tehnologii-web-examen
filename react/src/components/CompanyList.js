import { useState, useEffect } from 'react'
import CompanyStore from '../stores/CompanyStore'
import Company from './Company'

const store = new CompanyStore()

const CompanyList = () => {
	const [companies, setCompanies] = useState([])

	useEffect(() => {
		const comp = store.getAll()
		setCompanies(comp)
	}, [])

	const saveCompany = (id, company) => {
		store.saveOne(id, company)
	}

	return (
		<div>
			{
				companies.map((c, i) => <Company item={c} key={i} onSave={saveCompany} /> )
			}
		</div>
	)
}

export default CompanyList
