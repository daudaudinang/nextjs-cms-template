import PlaceholderContent from "@/components/demo/placeholder-content";
import {ContentLayout} from "@/components/admin-panel/content-layout";
import Breadcrumb from "@/components/admin-panel/Breadcrumb";

export default function TagsPage() {
	const breadcrumbItems = [
		{href: '/', label: 'Home'},
		{href: '/dashboard', label: 'Dashboard'},
		{label: 'Tags', isCurrentPage: true},
	];

	return (
		<ContentLayout title="Tags">
			<Breadcrumb items={breadcrumbItems}/>
			<PlaceholderContent/>
		</ContentLayout>
	);
}
