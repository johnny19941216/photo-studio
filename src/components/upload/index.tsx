import React from 'react'

type IProps = {
  accept: string[]

  multiple: boolean

  onChange(fileList: FileList): void
}

const Upload: React.FC<IProps> = ({ accept, multiple, onChange }) => {
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget
  }) => {
    const { files } = currentTarget

    if (files === null) return

    onChange(files)
  }

  return (
    <input
      type="file"
      accept={accept.join(', ')}
      multiple={multiple}
      onChange={handleFileChange}
    />
  )
}

export default Upload
