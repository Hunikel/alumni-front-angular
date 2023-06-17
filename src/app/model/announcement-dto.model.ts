// announcement.dto.ts
export class AnnouncementDTO {
  id: number;
  title: string;
  content: string;
  fileName: string;
  jobType: JobType;
  archived: boolean;

  constructor(
    id: number,
    title: string,
    content: string,
    fileName: string,
    jobType: JobType,
    archived: boolean
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.fileName = fileName;
    this.jobType = jobType;
    this.archived = archived;
  }

  static createEmptyInstance() {
    return new AnnouncementDTO(0, '', '', '', JobType.EMPLOI, false);
  }
}

export enum JobType {
  STAGE = 'STAGE',
  EMPLOI = 'EMPLOI',
}
