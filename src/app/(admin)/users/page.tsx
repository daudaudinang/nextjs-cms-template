import PlaceholderContent from "@/components/demo/placeholder-content";
import {ContentLayout} from "@/components/admin-panel/content-layout";
import Breadcrumb from "@/components/admin-panel/Breadcrumb";

export default function UsersPage() {
	const breadcrumbItems = [
		{href: '/', label: 'Home'},
		{href: '/dashboard', label: 'Dashboard'},
		{label: 'Users', isCurrentPage: true},
	];

	return (
		<ContentLayout title="Users">
			<Breadcrumb items={breadcrumbItems}/>
			<PlaceholderContent/>
		</ContentLayout>
	);
}
