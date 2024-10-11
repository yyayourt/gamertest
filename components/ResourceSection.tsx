import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Resource {
  title: string;
  url: string;
  description: string;
}

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
}

export default function ResourceSection({ title, resources }: ResourceSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {resources.length === 0 ? (
          <CardDescription>No resources available yet. Check back later!</CardDescription>
        ) : (
          <ul className="space-y-4">
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {resource.title}
                </a>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}