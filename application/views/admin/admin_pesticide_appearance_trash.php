<?php
if($this->session->userdata("admin_login")!="")
{
}
else
{
	redirect(base_url().'admin/admin');
}
?>
<?php include("header.php");?>

				<div class="span9">
					<div class="content" style="width:100%">
							<div class="module">
							<div class="module-head">
								<h3>Pesticide Appearance Type Trash Data</h3>
							</div>
							<div class="module-body table" >
                            
								<table cellpadding="0" cellspacing="0" border="0" class="datatable-1 table table-bordered table-striped	 display" width="100%" style="font-size:13px;">
									<thead>
										<tr>
											<th>Pesticide Appearance Type Name</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                            

										</tr>
									</thead>
									<tbody>
                                    <?php
									if(isset($select_pesticide_appearance_type))
									{
										
										foreach($select_pesticide_appearance_type as $pesticide_appearance_type)
											{
										?>
											<tr class="odd gradeX">
												<td><?php echo $pesticide_appearance_type['pesticide_appearance_name'] ?></td>
												<td ><a href="<?php echo base_url()?>admin/admin_agro_other/admin_pesticide_appearance_type_trash_delete/<?php echo $pesticide_appearance_type['pesticide_appearance_id'];?>" ><img src="<?php echo base_url("data/images/delete.png");?>"  style="width:30px;height:30px;margin-left:20px" / ></a></td>
												<td><a href="<?php echo base_url()?>admin/admin_agro_other/admin_pesticide_appearance_type_trash_backup/<?php echo $pesticide_appearance_type['pesticide_appearance_id'];?>"><img src="<?php echo base_url("data/images/backup.png");?>"  style="width:30px;height:30px;margin-left:20px"/></a></td>
											</tr>
											<?php
											}
									}
										?>										
										
									</tbody>
									<tfoot>
										<tr>
											<th>Pesticide Appearance Type Name</th>
											<th>Delete</th>
                                            <th>Back Up</th>
                                        
										</tr>
									</tfoot>
								</table>
							</div>
						</div><!--/.module-->

					<br />
						
					</div><!--/.content-->
				</div><!--/.span9-->
<?php include("footer.php"); ?>