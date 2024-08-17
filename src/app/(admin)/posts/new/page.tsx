import PlaceholderContent from "@/components/demo/placeholder-content";
import {ContentLayout} from "@/components/admin-panel/content-layout";
import Breadcrumb from "@/components/admin-panel/Breadcrumb";

export default function NewPostPage() {
	const breadcrumbItems = [
		{href: '/', label: 'Home'},
		{href: '/dashboard', label: 'Dashboard'},
		{href: '/posts', label: 'Posts'},
		{label: 'New', isCurrentPage: true},
	];

	return (
		<ContentLayout title="New Post">
			<Breadcrumb items={breadcrumbItems}/>
			<PlaceholderContent/>
		</ContentLayout>
	);
}
