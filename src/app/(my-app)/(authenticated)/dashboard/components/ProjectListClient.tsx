"use client";

import { Card, Typography, Divider } from "antd";

const { Title, Text } = Typography;

type Project = {
  id: string;
  title: string;
  startProject: { startDate: string; startTime: string };
  endProject: { endDate: string; endTime: string };
  requirements: string;
  type: string;
  slots: string;
  effort: string;
  focus_html: string;
};

type Props = {
  projects: Project[];
};

const ProjectListClient = ({ projects }: Props) => {

  return (
    <div style={{ padding: "16px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Our Projects</Title>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            bordered={true}
            style={{ width: "100%" }}
            headStyle={{ background: "#f5f5f5" }}
          >
            <Text strong>Початок: </Text>
            <Text>
              {new Date(project.startProject.startDate).toLocaleDateString()}{" "}
              {new Date(project.startProject.startTime).toLocaleTimeString()}
            </Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>Дедлайн: </Text>
            <Text>
              {new Date(project.endProject.endDate).toLocaleDateString()}{" "}
              {new Date(project.endProject.endTime).toLocaleTimeString()}
            </Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>Вимоги: </Text>
            <Text>{project.requirements}</Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>Тип: </Text>
            <Text>{project.type}</Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>Кількість слотів: </Text>
            <Text>{project.slots}</Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>Зусилля: </Text>
            <Text>{project.effort}</Text>
            <Divider style={{ margin: "8px 0" }} />

            <Text strong>У фокусі: </Text>
            <div
              dangerouslySetInnerHTML={{ __html: project.focus_html || "" }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectListClient;
